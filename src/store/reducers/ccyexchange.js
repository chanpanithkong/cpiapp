// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  users: []
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
      state.users = action.payload;
    }
  }
});

// Reducer
export default chat.reducer;
// ----------------------------------------------------------------------

export function getCcy() {
  return async () => {
    try {
      await axios.get('https://192.168.0.21:8443/OnlineBanking/EFT/ExchangeRate').then((res) => {
        dispatch(
          chat.actions.getUsersSuccess(res.data, function (err, result) {
            self.events = result;
          })
        );
      });

      // /api/chat/users
    } catch (error) {
      dispatch(chat.actions.hasError(error));
    }
  };
}
