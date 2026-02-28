/**
 * Global state context for actualPopup.
 */
import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';

const AppContext = createContext(null);

const initialState = {
  user: null,
  subscription: null,
  settings: {},
  platformStates: {},
  conversations: {},
  selectedPlatform: null,
  selectedConversationId: null,
  loading: false,
  error: null,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_SUBSCRIPTION':
      return { ...state, subscription: action.payload };
    case 'SET_SETTINGS':
      return { ...state, settings: action.payload ?? {} };
    case 'SET_PLATFORM_STATES':
      return { ...state, platformStates: action.payload ?? {} };
    case 'SET_CONVERSATIONS':
      return { ...state, conversations: action.payload ?? {} };
    case 'SET_SELECTED_PLATFORM':
      return { ...state, selectedPlatform: action.payload };
    case 'SET_SELECTED_CONVERSATION':
      return { ...state, selectedConversationId: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'UPDATE_PLATFORM_STATE': {
      const { platform, state: platformState } = action.payload;
      return {
        ...state,
        platformStates: {
          ...state.platformStates,
          [platform]: platformState,
        },
      };
    }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setUser = useCallback((user) => dispatch({ type: 'SET_USER', payload: user }), []);
  const setSubscription = useCallback((sub) => dispatch({ type: 'SET_SUBSCRIPTION', payload: sub }), []);
  const setSettings = useCallback((settings) => dispatch({ type: 'SET_SETTINGS', payload: settings }), []);
  const setPlatformStates = useCallback((states) => dispatch({ type: 'SET_PLATFORM_STATES', payload: states }), []);
  const setConversations = useCallback((convs) => dispatch({ type: 'SET_CONVERSATIONS', payload: convs }), []);
  const setSelectedPlatform = useCallback((p) => dispatch({ type: 'SET_SELECTED_PLATFORM', payload: p }), []);
  const setSelectedConversation = useCallback((id) => dispatch({ type: 'SET_SELECTED_CONVERSATION', payload: id }), []);
  const setLoading = useCallback((loading) => dispatch({ type: 'SET_LOADING', payload: loading }), []);
  const setError = useCallback((err) => dispatch({ type: 'SET_ERROR', payload: err }), []);
  const updatePlatformState = useCallback((platform, platformState) => {
    dispatch({ type: 'UPDATE_PLATFORM_STATE', payload: { platform, state: platformState } });
  }, []);
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  const actions = useMemo(
    () => ({
      setUser,
      setSubscription,
      setSettings,
      setPlatformStates,
      setConversations,
      setSelectedPlatform,
      setSelectedConversation,
      setLoading,
      setError,
      updatePlatformState,
      reset,
    }),
    [
      setUser,
      setSubscription,
      setSettings,
      setPlatformStates,
      setConversations,
      setSelectedPlatform,
      setSelectedConversation,
      setLoading,
      setError,
      updatePlatformState,
      reset,
    ]
  );

  const value = useMemo(
    () => ({ ...state, actions }),
    [state, actions]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
