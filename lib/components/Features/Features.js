import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/catalog/selectors';
import { FeaturesWrapper, InfoBox, InfoBoxField, Table, TableItem, TableLine, Title } from './Features.styled';
import sprite from '../../assets/sprite.svg';
import { BookForm } from '../BookForm/BookForm';
const Features = () => {
  const camper = useSelector(selectCampersById);
  const {
    adults,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details
  } = camper;
  return /*#__PURE__*/React.createElement(FeaturesWrapper, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfoBoxField, null, adults && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-adults'
  })), /*#__PURE__*/React.createElement("p", null, " ", adults, " adults")), transmission && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-automatic',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, " ", transmission)), details.airConditioner >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-ac',
    style: {
      fill: '#101828'
    }
  })), /*#__PURE__*/React.createElement("p", null, " AC")), engine && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-petrol'
  })), /*#__PURE__*/React.createElement("p", null, " ", engine)), details.kitchen >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-kitchen',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, " kitchen ")), details.beds >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-beds',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, " ", details.beds, " beds")), details.airConditioner >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-air-conditioner',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, " ", details.airConditioner, " air conditioner")), details.CD >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-cd',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, " CD")), details.radio >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-radio',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, " Radio")), details.hob >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-hob',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, details.hob, " hob ")), details.toilet >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-toilet'
  })), /*#__PURE__*/React.createElement("p", null, "Toilet")), details.shower >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-shower',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, "Shower")), details.freezer >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-freezer',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, "Freezer")), details.freezer >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-freezer',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, "Freezer")), details.gas && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-gas',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, "Gas")), details.water && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-water',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, "Water")), details.microwave >= 1 && /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-microwave',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, "Microwave"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, null, "Vehicle details"), /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(TableLine, null, /*#__PURE__*/React.createElement(TableItem, null, "Form"), /*#__PURE__*/React.createElement(TableItem, null, form)), /*#__PURE__*/React.createElement(TableLine, null, /*#__PURE__*/React.createElement(TableItem, null, "Length"), /*#__PURE__*/React.createElement(TableItem, null, length)), /*#__PURE__*/React.createElement(TableLine, null, /*#__PURE__*/React.createElement(TableItem, null, "Width"), /*#__PURE__*/React.createElement(TableItem, null, width)), /*#__PURE__*/React.createElement(TableLine, null, /*#__PURE__*/React.createElement(TableItem, null, "Height"), /*#__PURE__*/React.createElement(TableItem, null, height)), /*#__PURE__*/React.createElement(TableLine, null, /*#__PURE__*/React.createElement(TableItem, null, "Tank"), /*#__PURE__*/React.createElement(TableItem, null, tank)), /*#__PURE__*/React.createElement(TableLine, null, /*#__PURE__*/React.createElement(TableItem, null, "Consumption"), /*#__PURE__*/React.createElement(TableItem, null, consumption)))))), /*#__PURE__*/React.createElement(BookForm, null));
};
export default Features;