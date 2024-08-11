import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/catalog/selectors';
import sprite from '../../assets/sprite.svg';
import { BookForm } from '../BookForm/BookForm';
import { Comment, ListItem, Name, RatingIcon, RatingList, ReviewImage, ReviewsWrapper, UserInfo } from './Reviews.styled';
const Reviews = () => {
  const camper = useSelector(selectCampersById);
  const {
    reviews
  } = camper;
  return /*#__PURE__*/React.createElement(ReviewsWrapper, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, reviews.map(item => /*#__PURE__*/React.createElement(ListItem, {
    key: item.reviewer_name
  }, /*#__PURE__*/React.createElement(UserInfo, null, /*#__PURE__*/React.createElement(ReviewImage, null, item.reviewer_name.charAt(0)), /*#__PURE__*/React.createElement(Name, null, item.reviewer_name), /*#__PURE__*/React.createElement(RatingList, null, [...Array(5)].map((_, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, index < item.reviewer_rating ? /*#__PURE__*/React.createElement(RatingIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-star',
    fill: "#FFC531"
  })) : /*#__PURE__*/React.createElement(RatingIcon, null, /*#__PURE__*/React.createElement("use", {
    href: sprite + '#icon-star',
    fill: "#F2F4F7"
  })))))), /*#__PURE__*/React.createElement(Comment, null, item.comment))))), /*#__PURE__*/React.createElement(BookForm, null));
};
export default Reviews;