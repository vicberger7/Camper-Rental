import { useSelector } from 'react-redux';
import { selectFavoritesCampers } from '../../redux/favorites/selectors';
import { selectVisibleCampers } from '../../redux/filter/selectors';
import { CampersList } from '../../components/CatalogList/CampersList';
import { Container } from '../../styles/GlobalStyles';
import { selectIsLoading } from '../../redux/catalog/selectors';
import { Loader } from '../../components/Loader/Loader';
import camper from '../../assets/image/camper.jpg';
import { Picture, Title } from './Favorites.styled';
const Favorites = () => {
  const likedCampers = useSelector(selectFavoritesCampers);
  const campersByFilter = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);
  const favoriteCampers = campersByFilter.filter(camp => likedCampers.includes(camp._id));
  return /*#__PURE__*/React.createElement(Container, null, favoriteCampers.length === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Title, null, "\u0421\u0445\u043E\u0436\u0435, \u0432\u0430\u0448 \u0441\u043F\u0438\u0441\u043E\u043A \u0443\u043B\u044E\u0431\u043B\u0435\u043D\u0438\u0445 \u0437\u0430\u0440\u0430\u0437 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439. \u0414\u043B\u044F \u0434\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F \u043A\u0435\u043C\u043F\u0435\u0440\u0456\u0432 \u0434\u043E \u0432\u0430\u0448\u0438\u0445 \u0443\u043B\u044E\u0431\u043B\u0435\u043D\u0438\u0445, \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0439\u0442\u0435 \u043A\u0430\u0442\u0430\u043B\u043E\u0433, \u0434\u0435 \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u043D\u0430\u0439\u0442\u0438 a \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u0435\u043C\u043F\u0435\u0440\u0456\u0432. \u0417\u0432\u0456\u0434\u0442\u0438 \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043A\u0435\u043C\u043F\u0435\u0440\u0438, \u044F\u043A\u0456 \u0432\u0430\u043C \u043F\u043E\u0434\u043E\u0431\u0430\u044E\u0442\u044C\u0441\u044F, \u0456 \u0434\u043E\u0434\u0430\u0439\u0442\u0435 \u0457\u0445 \u0434\u043E \u0441\u0432\u043E\u0457\u0445 \u043E\u0431\u0440\u0430\u043D\u0438\u0445, \u043D\u0430\u0442\u0438\u0441\u043D\u0443\u0432\u0448\u0438 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u043F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F\xBB. \u041E\u0434\u0438\u043D \u0440\u0430\u0437 \u0432\u0438 \u0434\u043E\u0434\u0430\u043B\u0438 \u043A\u0435\u043C\u043F\u0435\u0440\u0438 \u0434\u043E \u043E\u0431\u0440\u0430\u043D\u0438\u0445, \u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0457\u0445 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u0442\u0443\u0442."), /*#__PURE__*/React.createElement(Picture, {
    src: camper,
    alt: "camper"
  })), isLoading ? /*#__PURE__*/React.createElement(Loader, null) : /*#__PURE__*/React.createElement(CampersList, {
    campers: favoriteCampers,
    pathForModal: "favorites"
  }));
};
export default Favorites;