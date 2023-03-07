// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  listusers: []
};

const chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET USERS
    getUsersSuccess(state, action) {
      state.listusers = action.payload;
    }
  }
});

// Reducer
export default chat.reducer;
// ----------------------------------------------------------------------

export function getListUsers() {
  return async () => {
    try {
      await axios.get('http://172.16.17.171:5000/categorieslist').then((res) => {
        dispatch(chat.actions.getUsersSuccess(res.data.categories));
      });

      // /api/chat/users
    } catch (error) {
      dispatch(chat.actions.hasError(error));
    }
  };
}
