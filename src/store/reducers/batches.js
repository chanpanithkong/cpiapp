// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  batches: []
};

const batch = createSlice({
  name: 'batch',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET BATCHES
    getBatchesSuccess(state, action) {
      state.batches = action.payload;
    }
  }
});

// Reducer
export default batch.reducer;
// ----------------------------------------------------------------------
export function getBatches() {
  return async () => {
    try {
      await axios.get('http://172.16.17.171/api/batcheslist').then((res) => {
        //console.log(res);
        dispatch(batch.actions.getBatchesSuccess(res.data.batches));
      });
      
      // /api/chat/users
    } catch (error) {
      dispatch(batch.actions.hasError(error));
    }
  };
}
