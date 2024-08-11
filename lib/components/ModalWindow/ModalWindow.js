import Modal from 'react-modal';
import { AdditionalNavigation, CloseModalBtn, ContentWrapper, Description, Image, ImageWrapper, LocationIcon, LocationText, Name, NameWrapper, Price, RatingIcon, RatingReviews, RationLocationLine, StyledLink } from './ModalWindow.styled';
import sprite from '../../assets/sprite.svg';
import { Outlet, useParams } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCampersById } from '../../redux/catalog/operations';
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(17, 18, 19, 0.4)'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '40px 16px 40px 40px',
    width: '982px',
    height: '720px',
    overflowY: 'hidden'
  }
};
const ModalWindow = ({
  isOpen,
  onRequestClose,
  camperInfo,
  pathForModal
}) => {
  const {
    camperId
  } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampersById(camperId));
  }, []);
  const {
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews
  } = camperInfo;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Modal, {
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    style: customStyles
  }, /*#__PURE__*/React.createElement(ContentWrapper, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NameWrapper, null, /*#__PURE__*/React.createElement(Name, null, name), /*#__PURE__*/React.createElement(CloseModalBtn, {
    onClick: () => onRequestClose()
  }, /*#__PURE__*/React.createElement("use", {
    href: `${sprite}#icon-close`
  }))), /*#__PURE__*/React.createElement(RationLocationLine, null, /*#__PURE__*/React.createElement(RatingReviews, null, /*#__PURE__*/React.createElement(RatingIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-star'
  })), rating, " (", reviews.length, " Reviews)"), /*#__PURE__*/React.createElement(LocationText, null, /*#__PURE__*/React.createElement(LocationIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-location'
  })), location.split(', ').reverse().join(', '))), /*#__PURE__*/React.createElement(Price, null, "\u20AC", price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')), /*#__PURE__*/React.createElement(ImageWrapper, null, /*#__PURE__*/React.createElement(Image, {
    src: gallery[0],
    alt: name
  }), /*#__PURE__*/React.createElement(Image, {
    src: gallery[1],
    alt: name
  }), /*#__PURE__*/React.createElement(Image, {
    src: gallery[2],
    alt: name
  })), /*#__PURE__*/React.createElement(Description, null, description)), /*#__PURE__*/React.createElement(AdditionalNavigation, null, /*#__PURE__*/React.createElement(StyledLink, {
    to: `/${pathForModal}/${camperInfo._id}/features`
  }, "Features"), /*#__PURE__*/React.createElement(StyledLink, {
    to: `/${pathForModal}/${camperInfo._id}/reviews`
  }, "Reviews")), /*#__PURE__*/React.createElement(Suspense, null, /*#__PURE__*/React.createElement(Outlet, null)))));
};
Modal.setAppElement('#root');
export default ModalWindow;