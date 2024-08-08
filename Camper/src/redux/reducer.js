
import { ADD_FAVORITE, REMOVE_FAVORITE } from './actions';

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return {
        ...state,
        favorites: newFavorites,
      };
    case REMOVE_FAVORITE:
      const updatedFavorites = state.favorites.filter(fav => fav._id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    default:
      return state;
  }
};

export default reducer;
