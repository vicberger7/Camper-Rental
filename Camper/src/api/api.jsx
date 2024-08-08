import axios from 'axios';
import  { adverts }  from './adverts.json';

const API_URL = 'https://66b38b147fba54a5b7ed5937.mockapi.io/camper/adverts'


adverts.forEach(async (advert) => {
  try {
    const response = await axios.get(API_URL, advert, );
 
    console.log('Advert added:', response.data);
  } catch (error) {
    console.error('Error adding advert:', error);
  }
});
