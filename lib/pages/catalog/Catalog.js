import { useSelector } from 'react-redux';
import { CampersList } from '../../components/CatalogList/CampersList';
import { Filters } from '../../components/Filters/Filters';
import { Location } from '../../components/Location/Location';
import { Container } from '../../styles/GlobalStyles';
import { PageCatalogWrapper } from './Catalog.styled';
import { selectVisibleCampers } from '../../redux/filter/selectors';
import { selectIsLoading } from '../../redux/catalog/selectors';
import { Loader } from '../../components/Loader/Loader';
const Catalog = () => {
  const campersByFilter = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(PageCatalogWrapper, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Location, null), /*#__PURE__*/React.createElement(Filters, null)), isLoading ? /*#__PURE__*/React.createElement(Loader, null) : /*#__PURE__*/React.createElement(CampersList, {
    campers: campersByFilter,
    pathForModal: "catalog"
  })));
};
export default Catalog;