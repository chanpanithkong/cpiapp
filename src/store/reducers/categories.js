// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  categories: []
};

const cat = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET USERS
    getCategoriesSuccess(state, action) {
      state.categories = action.payload;
    }
  }
});

// Reducer
export default cat.reducer;
// ----------------------------------------------------------------------
export function getCategories() {
  return async () => {
    try {
      await axios.get('http://172.16.17.171/api/categorieslist').then((res) => {
        console.log(res.data.categories);
        dispatch(cat.actions.getCategoriesSuccess(res.data.categories));
      });
      
      // /api/chat/users
    } catch (error) {
      dispatch(cat.actions.hasError(error));
    }
  };
}
