import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navigation } from './components/Navigation/Navigation';
import { Loader } from './components/Loader/Loader';
export const AppLayout = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navigation, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(Loader, null)
  }, /*#__PURE__*/React.createElement(Outlet, null))), /*#__PURE__*/React.createElement(GlobalStyles, null));
};