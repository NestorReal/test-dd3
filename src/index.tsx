import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import GlobalStyles from './config/global-styles';
import { store } from './config/app/store';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line camelcase
import global_es from './translations/es';
// eslint-disable-next-line camelcase
import global_en from "./translations/en";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      // eslint-disable-next-line camelcase
      global: global_es,
    },
    en: {
      // eslint-disable-next-line camelcase
      global: global_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
