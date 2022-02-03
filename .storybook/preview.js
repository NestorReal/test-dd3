/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import GlobalStyles from '../src/config/global-styles';
import { mainTheme, anotherTheme } from '../src/mocks/themes';
import { store } from '../src/config/app/store';

const themes = [mainTheme, anotherTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

const customViewports = {
  Desktop: {
    name: 'Desktop 1024',
    styles: {
      width: '1024px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Desktop 1440',
    styles: {
      width: '1440px',
      height: '801px',
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
};
