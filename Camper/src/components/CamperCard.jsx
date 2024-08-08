

import PropTypes from 'prop-types';

const CamperCard = ({ camper, isFavorite, onFavorite }) => {
  return (
    <div>
      <img src={camper.gallery[0]} alt={camper.name} />
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <button onClick={() => onFavorite(camper)} style={{color: isFavorite ? 'red' : 'black'}}>
        ❤
      </button>
    </div>
  );
};

CamperCard.propTypes = {
  camper: PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default CamperCard;
