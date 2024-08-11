import { Field, Form, Formik } from "formik";
import sprite from "../../assets/sprite.svg";
import { Button, FilterTitle, Group, GroupTitle, Input, Label, Span, SvgIcon, SvgIconCampers } from "./Filters.styled";
import { useDispatch } from "react-redux";
import { changeEquipment, changeType } from "../../redux/filter/filterSlice";
export const Filters = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(changeEquipment(values.equipment));
    dispatch(changeType(values.type));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterTitle, null, "Filters"), /*#__PURE__*/React.createElement(Formik, {
    initialValues: {
      equipment: [],
      type: ""
    },
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(GroupTitle, {
    id: "checkbox-group-equipment"
  }, "Vehicle equipment"), /*#__PURE__*/React.createElement(Group, {
    role: "group",
    "aria-labelledby": "checkbox-group-equipment"
  }, /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Input, {
    type: "checkbox",
    name: "equipment",
    value: "airConditioner"
  }), /*#__PURE__*/React.createElement(Span, null, /*#__PURE__*/React.createElement(SvgIcon, {
    style: {
      fill: "#101828"
    }
  }, /*#__PURE__*/React.createElement("use", {
    href: sprite + "#icon-ac"
  })), "AC")), /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Input, {
    type: "checkbox",
    name: "equipment",
    value: "automatic"
  }), /*#__PURE__*/React.createElement(Span, null, /*#__PURE__*/React.createElement(SvgIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + "#icon-automatic"
  })), "Automatic")), /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Input, {
    type: "checkbox",
    name: "equipment",
    value: "kitchen"
  }), /*#__PURE__*/React.createElement(Span, null, /*#__PURE__*/React.createElement(SvgIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + "#icon-kitchen"
  })), "Kitchen")), /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Input, {
    type: "checkbox",
    name: "equipment",
    value: "TV"
  }), /*#__PURE__*/React.createElement(Span, null, /*#__PURE__*/React.createElement(SvgIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + "#icon-tv"
  })), "TV")), /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Input, {
    type: "checkbox",
    name: "equipment",
    value: "shower"
  }), /*#__PURE__*/React.createElement(Span, null, /*#__PURE__*/React.createElement(SvgIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + "#icon-shower"
  })), "Shower/WC"))), /*#__PURE__*/React.createElement(GroupTitle, {
    id: "checkbox-group-type",
    style: {
      marginTop: "30px"
    }
  }, "Vehicle type"), /*#__PURE__*/React.createElement(Group, {
    role: "group",
    "aria-labelledby": "checkbox-group-type"
  }, /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Input, {
    type: "radio",
    name: "type",
    value: "panelTruck"
  }), /*#__PURE__*/React.createElement(Span, null, /*#__PURE__*/React.createElement(SvgIconCampers, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + "#icon-van"
  })), "Van")), /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Input, {
    type: "radio",
    name: "type",
    value: "fullyIntegrated"
  }), /*#__PURE__*/React.createElement(Span, null, /*#__PURE__*/React.createElement(SvgIconCampers, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + "#icon-fully-integrated"
  })), "Fully Integrated")), /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Input, {
    type: "radio",
    name: "type",
    value: "alcove"
  }), /*#__PURE__*/React.createElement(Span, null, /*#__PURE__*/React.createElement(SvgIconCampers, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + "#icon-alcove"
  })), "Alcove"))), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Search"))));
};