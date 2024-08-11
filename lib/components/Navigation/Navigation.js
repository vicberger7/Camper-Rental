import { Container } from '../../styles/GlobalStyles';
import { HeaderField, List, StyledLink, SvgIconCampers } from './Navigation.styled';
import sprite from '../../assets/sprite.svg';
export const Navigation = () => {
  return /*#__PURE__*/React.createElement(HeaderField, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(StyledLink, {
    to: "/"
  }, /*#__PURE__*/React.createElement(SvgIconCampers, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-alcove'
  })), "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(StyledLink, {
    to: "/catalog"
  }, "Catalog")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(StyledLink, {
    to: "/favorites"
  }, "Favorites"))))));
};