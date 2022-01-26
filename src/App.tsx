import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './layouts/Main';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import { mainTheme } from './mocks/themes';

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Routes>
      <Route element={<Main />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="locations" element={<div>Locations</div>} />
        <Route path="*" element={<div>No match route</div>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="password-recovery" element={<PasswordRecovery />} />
    </Routes>
  </ThemeProvider>
);

export default App;
