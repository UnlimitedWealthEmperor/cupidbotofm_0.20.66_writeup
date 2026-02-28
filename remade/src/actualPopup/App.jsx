/**
 * Main React app component for actualPopup.
 */
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import { Typography } from '@mui/joy';
import { theme } from './theme';
import { AppProvider, useApp } from './context/AppContext';
import { MessageProvider } from './context/MessageContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Conversations from './pages/Conversations';
import Login from './pages/Login';
import { requestData } from './api';

function AppRoutes() {
  const { user, actions } = useApp();
  const [authChecked, setAuthChecked] = React.useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const userData = await requestData('user');
        if (!cancelled) {
          actions.setUser(userData || null);
          setAuthChecked(true);
        }
      } catch {
        if (!cancelled) {
          actions.setUser(null);
          setAuthChecked(true);
        }
      }
    })();
    return () => { cancelled = true; };
  }, [actions]);

  if (!authChecked) {
    return (
      <Typography level="body-md" sx={{ p: 4, textAlign: 'center' }}>
        Loading...
      </Typography>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/conversations" element={<Conversations />} />
      </Route>
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function AppContent() {
  return (
    <AppProvider>
      <MessageProvider>
        <AppRoutes />
      </MessageProvider>
    </AppProvider>
  );
}

export default function App() {
  useEffect(() => {
    window.parent?.postMessage?.({ action: 'popupFinishedLoading' }, '*');
  }, []);

  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <AppContent />
    </CssVarsProvider>
  );
}
