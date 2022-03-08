import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './layouts/Main';
import Login from './pages/Login';
import RequireAuth from './components/auth/RequireAuth';
import PasswordRecovery from './pages/PasswordRecovery';
import PasswordReset from './pages/PasswordReset';
import Dashboard from './pages/Dashboard';
import Locations from './pages/Locations';
import NotFound from './pages/NotFound';
import { mainTheme } from './mocks/themes';

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Routes>
      <Route element={<Main />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="locations"
          element={
            <RequireAuth>
              <Locations />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="password-recovery" element={<PasswordRecovery />} />
      <Route path="/reset/:uid/:token" element={<PasswordReset />} />
    </Routes>
  </ThemeProvider>
);

export default App;
