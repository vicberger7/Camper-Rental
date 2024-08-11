import { useDispatch } from 'react-redux';
import { getCampers } from './redux/catalog/operations';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { lazy } from 'react';
const Home = /*#__PURE__*/lazy(() => import('./pages/Home/Home'));
const Favorites = /*#__PURE__*/lazy(() => import('./pages/Favorites/Favorites'));
const Catalog = /*#__PURE__*/lazy(() => import('./pages/catalog/Catalog'));
const Rewievs = /*#__PURE__*/lazy(() => import('./components/Reviews/Reviews'));
const Features = /*#__PURE__*/lazy(() => import('./components/Features/Features'));
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampers());
  });
  return /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(AppLayout, null)
  }, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "catalog",
    element: /*#__PURE__*/React.createElement(Catalog, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "catalog/:camperId",
    element: /*#__PURE__*/React.createElement(Catalog, null)
  }, /*#__PURE__*/React.createElement(Route, {
    path: "features",
    element: /*#__PURE__*/React.createElement(Features, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "reviews",
    element: /*#__PURE__*/React.createElement(Rewievs, null)
  })), /*#__PURE__*/React.createElement(Route, {
    path: "favorites",
    element: /*#__PURE__*/React.createElement(Favorites, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "favorites/:camperId",
    element: /*#__PURE__*/React.createElement(Favorites, null)
  }, /*#__PURE__*/React.createElement(Route, {
    path: "features",
    element: /*#__PURE__*/React.createElement(Features, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "reviews",
    element: /*#__PURE__*/React.createElement(Rewievs, null)
  })), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(Home, null)
  })));
}
export default App;