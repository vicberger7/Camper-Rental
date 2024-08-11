import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')).render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Provider, {
  store: store
}, /*#__PURE__*/React.createElement(PersistGate, {
  loading: null,
  persistor: persistor
}, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(App, null)))), /*#__PURE__*/React.createElement(GlobalStyles, null)));