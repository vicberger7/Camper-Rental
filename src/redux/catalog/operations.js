import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 axios.defaults.baseURL = 'https://66b38b147fba54a5b7ed5937.mockapi.io/adverts';



export const getCampers = createAsyncThunk(
  'catalog/getCampers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/camper');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCampersById = createAsyncThunk(
  'catalog/getCampersById',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/camper/?_id=${credentials}`);
      return response.data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);