// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  ccys: []
};

const slice = createSlice({
  name: 'ccy',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },
    // GET USERS
    getCcySuccess(state, action) {
      state.ccys = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;
// ----------------------------------------------------------------------

export function getCcy() {
  return async () => {
    try {
      const response = await axios.get('https://nbc.gov.kh/api/exRate.php');
      dispatch(slice.actions.getCcySuccess(response.data));
      // /api/chat/users
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
