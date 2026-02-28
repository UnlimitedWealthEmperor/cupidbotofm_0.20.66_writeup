/**
 * Message/communication context for actualPopup.
 * Sends tasks to content script via parent window postMessage.
 */
import React, { createContext, useContext, useCallback, useRef, useEffect } from 'react';
import { runTask } from '../api';

const MessageContext = createContext(null);

export function MessageProvider({ children }) {
  const resultHandlersRef = useRef(new Set());

  const sendTask = useCallback(async (platform, taskName, args = {}) => {
    const result = await runTask(platform, taskName, args);
    resultHandlersRef.current.forEach((cb) => {
      try {
        cb({ platform, taskName, args, result });
      } catch (e) {
        console.error('MessageContext result handler error:', e);
      }
    });
    return result;
  }, []);

  const onTaskResult = useCallback((callback) => {
    resultHandlersRef.current.add(callback);
    return () => resultHandlersRef.current.delete(callback);
  }, []);

  useEffect(() => {
    const handler = (event) => {
      const d = event.data;
      if (d?.source !== 'parent' || d?.target !== 'actualPopup') return;
      if (d.type === 'taskResult' && d.payload) {
        resultHandlersRef.current.forEach((cb) => {
          try {
            cb(d.payload);
          } catch (e) {
            console.error('MessageContext task result handler error:', e);
          }
        });
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const value = { sendTask, onTaskResult };

  return (
    <MessageContext.Provider value={value}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const ctx = useContext(MessageContext);
  if (!ctx) throw new Error('useMessage must be used within MessageProvider');
  return ctx;
}
