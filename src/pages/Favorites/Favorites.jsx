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

  const favoriteCampers = campersByFilter.filter((camp) =>
    likedCampers.includes(camp._id)
  );

  return (
    <Container>
      {favoriteCampers.length === 0 && (
        <>
          <Title>
            Схоже, ваш список улюблених зараз порожній. Для додавання кемперів
            до ваших улюблених, відвідайте каталог, де ви можете знайти a список
            кемперів. Звідти ви можете вибрати кемпери, які вам подобаються, і
            додайте їх до своїх обраних, натиснувши кнопку «подобається». Один
            раз ви додали кемпери до обраних, ви зможете їх переглядати тут.
          </Title>
          <Picture src={camper} alt="camper" />
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <CampersList campers={favoriteCampers} pathForModal="favorites" />
      )}
    </Container>
  );
};

export default Favorites;
