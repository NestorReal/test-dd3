import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { mainTheme } from './mocks/themes';

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </ThemeProvider>
);

export default App;
