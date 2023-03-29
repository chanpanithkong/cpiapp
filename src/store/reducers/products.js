// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  products: []
};

const pro = createSlice({
  name: 'pro',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET USERS
    getProductsSuccess(state, action) {
      state.products = action.payload;
    }
  }
});

// Reducer
export default pro.reducer;
// ----------------------------------------------------------------------
export function getProducts() {
  return async () => {
    try {
      await axios.get('http://172.16.17.171/api/productslist').then((res) => {
        //console.log(res.data.products);
        dispatch(pro.actions.getProductsSuccess(res.data.products));
      });
      
      // /api/chat/users
    } catch (error) {
      dispatch(pro.actions.hasError(error));
    }
  };
}
