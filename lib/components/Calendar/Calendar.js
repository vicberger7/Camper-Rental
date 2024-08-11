function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarIcon, CalendarStyles, DateInput, HeaderBox, HeaderData, Label, MonthYearText, OptionSelector, SvgHeader } from './Calendar.styled';
import { WarningMessage } from '../BookForm/BookForm.styled';
import { format } from 'date-fns';
import { getMonth } from 'date-fns';
import { getYear } from 'date-fns';
import sprite from '../../assets/sprite.svg';
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth
}) => {
  return /*#__PURE__*/React.createElement(HeaderBox, null, /*#__PURE__*/React.createElement(SvgHeader, {
    onClick: decreaseMonth
  }, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-previous'
  })), /*#__PURE__*/React.createElement(MonthYearText, null, months[getMonth(date)], " ", getYear(date)), /*#__PURE__*/React.createElement(SvgHeader, {
    onClick: increaseMonth
  }, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-next'
  })));
};
export default CustomHeader;
export const Calendar = ({
  name,
  errors,
  touched,
  choosenDate,
  onChange,
  setChoosenDate
}) => {
  const [selectedDate, setSelectedDate] = useState(false);
  const handleDateChange = date => {
    setChoosenDate(date);
    setSelectedDate(true);
  };
  const formattedDate = choosenDate ? format(choosenDate, 'dd/MM/yyyy') : '';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DatePicker, {
    selected: choosenDate,
    onChange: handleDateChange,
    customInput: /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(DateInput, {
      name: name,
      value: formattedDate || '',
      placeholder: !selectedDate ? 'Booking date' : '',
      onFocus: () => setSelectedDate(false),
      onChange: onChange
    }), errors[name] && touched[name] && /*#__PURE__*/React.createElement(WarningMessage, null, errors[name]), /*#__PURE__*/React.createElement(CalendarIcon, null, /*#__PURE__*/React.createElement("use", {
      href: sprite + '#icon-calendar-btn'
    }))),
    renderCustomHeader: props => /*#__PURE__*/React.createElement(CustomHeader, _extends({}, props, {
      value: formattedDate || new Date()
    })),
    calendarStartDay: 1,
    formatWeekDay: nameOfDay => nameOfDay.substr(0, 3),
    dateFormat: "dd/MM/yyyy"
  }), /*#__PURE__*/React.createElement(CalendarStyles, null));
};