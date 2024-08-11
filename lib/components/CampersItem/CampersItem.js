import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { Button, Description, Image, InfoBox, InfoBoxField, Item, LocationIcon, LocationText, Name, NamePriceLine, Price, PriceLikeField, RatingIcon, RatingReviews, RationLocationLine } from './CampersItem.styled';
import { default as ModalWindow } from '../ModalWindow/ModalWindow';
import { useNavigate } from 'react-router-dom';
import { ButtonLike } from '../ButtonLike/ButtonLike';
export const CampersItem = ({
  camper,
  pathForModal
}) => {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews
  } = camper;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    const modalUrl = `/${pathForModal}/${_id}`;
    navigate(modalUrl);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'visible';
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    key: _id
  }, /*#__PURE__*/React.createElement(Image, {
    src: gallery[0],
    alt: name,
    width: 290,
    height: 310
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NamePriceLine, null, /*#__PURE__*/React.createElement(Name, null, name), /*#__PURE__*/React.createElement(PriceLikeField, null, /*#__PURE__*/React.createElement(Price, null, "\u20AC", price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')), /*#__PURE__*/React.createElement(ButtonLike, {
    item: camper
  }))), /*#__PURE__*/React.createElement(RationLocationLine, null, /*#__PURE__*/React.createElement(RatingReviews, null, /*#__PURE__*/React.createElement(RatingIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-star'
  })), rating, " (", reviews.length, " Reviews)"), /*#__PURE__*/React.createElement(LocationText, null, /*#__PURE__*/React.createElement(LocationIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-location'
  })), location.split(', ').reverse().join(', '))), /*#__PURE__*/React.createElement(Description, null, description), /*#__PURE__*/React.createElement(InfoBoxField, null, /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-adults'
  })), /*#__PURE__*/React.createElement("p", null, " ", adults, " adults")), /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-automatic',
    style: {
      stroke: '#101828',
      fill: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("p", null, " ", transmission)), /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("use", {
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
    href: sprite + '#icon-ac',
    style: {
      fill: '#101828'
    }
  })), /*#__PURE__*/React.createElement("p", null, " AC"))), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    onClick: () => handleOpenModal()
  }, "Show more"))), isModalOpen && /*#__PURE__*/React.createElement(ModalWindow, {
    camperInfo: camper,
    isOpen: isModalOpen,
    onRequestClose: handleCloseModal,
    pathForModal: pathForModal
  }));
};