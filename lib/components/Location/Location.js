import sprite from '../../assets/sprite.svg';
import { Input, Label, LocationIcon, WrapperBox } from './Location.styled';
import { changeLocation } from '../../redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../redux/filter/selectors';
export const Location = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  return /*#__PURE__*/React.createElement(WrapperBox, null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "location"
  }, "Location", /*#__PURE__*/React.createElement(Input, {
    type: "text",
    id: "location",
    value: location,
    placeholder: "City, country",
    onChange: e => dispatch(changeLocation(e.target.value))
  }), /*#__PURE__*/React.createElement(LocationIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-location'
  }))));
};