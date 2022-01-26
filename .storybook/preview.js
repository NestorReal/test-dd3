/* eslint-disable import/prefer-default-export */
import React from 'react';
import { addDecorator } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import GlobalStyles from '../src/config/global-styles';
import { mainTheme, anotherTheme } from '../src/mocks/themes';

const themes = [mainTheme, anotherTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <MemoryRouter>
        <Story />
      </MemoryRouter>
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
};
