import { Form, Formik } from 'formik';
import { UserFormSchema } from './FormSchema';
import { Button, Comment, ContactUserParam, InfoText, InputField, Title, UserFormWrapper, WarningMessage } from './BookForm.styled';
import { Calendar } from '../Calendar/Calendar';
import { useState } from 'react';
export const BookForm = () => {
  const [choosenDate, setChoosenDate] = useState('');
  const initialValues = {
    name: '',
    email: '',
    bookingDate: choosenDate,
    comment: ''
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UserFormWrapper, null, /*#__PURE__*/React.createElement(Title, null, "Book your campervan now"), /*#__PURE__*/React.createElement(InfoText, null, "Stay connected! We are always ready to help you."), /*#__PURE__*/React.createElement(Formik, {
    initialValues: initialValues,
    validationSchema: UserFormSchema,
    onSubmit: values => {
      window.location.reload();
    },
    enableReinitialize: true
  }, ({
    errors,
    touched
  }) => /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(ContactUserParam, null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(InputField, {
    name: "name",
    type: "text",
    autoComplete: "off",
    placeholder: "Name"
  }), errors.name && touched.name && /*#__PURE__*/React.createElement(WarningMessage, null, errors.name)), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(InputField, {
    name: "email",
    type: "text",
    autoComplete: "off",
    placeholder: "Email"
  }), errors.email && touched.email && /*#__PURE__*/React.createElement(WarningMessage, null, errors.email)), /*#__PURE__*/React.createElement(Calendar, {
    name: "bookingDate",
    errors: errors,
    touched: touched,
    setChoosenDate: setChoosenDate,
    choosenDate: initialValues.bookingDate,
    onChange: date => setChoosenDate(date)
  }), /*#__PURE__*/React.createElement(Comment, {
    name: "comment",
    placeholder: "Comment"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Send")))));
};