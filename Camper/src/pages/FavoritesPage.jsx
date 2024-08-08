

import { useSelector } from 'react-redux';
import CamperCard from '../components/CamperCard';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h1>Улюблені Кампери</h1>
      <div>
        {favorites.map(camper => (
          <CamperCard 
            key={camper._id} 
            camper={camper} 
            isFavorite={true} 
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
