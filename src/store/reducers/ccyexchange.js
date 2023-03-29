// // third-party
// import { createSlice } from '@reduxjs/toolkit';

// // project imports
// import axios from 'axios';
// import { dispatch } from '../index';

// // ----------------------------------------------------------------------

// const initialState = {
//   error: null,
//   ccys: []
// };

// const slice = createSlice({
//   name: 'ccy',
//   initialState,
//   reducers: {
//     // HAS ERROR
//     hasError(state, action) {
//       state.error = action.payload;
//     },
//     // GET USERS
//     getCcySuccess(state, action) {
//       state.ccys = action.payload;
//     }
//   }
// });

// // Reducer
// export default slice.reducer;
// // ----------------------------------------------------------------------

// export function getCcy() {
//   return async () => {
//     try {
//       const response = await axios.get('https://nbc.gov.kh/api/exRate.php');
//       dispatch(slice.actions.getCcySuccess(response.data));
//       // /api/chat/users
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  products: {}
};

const user = createSlice({
  name: 'user',
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
export default user.reducer;
// ----------------------------------------------------------------------
export function getProducts() {
  return async () => {
    try {
      const data = { userid: 'ito1796', password: '1' };
      await axios.post('http://172.16.17.171/api/userlogin', { data }).then((res) => {
        dispatch(user.actions.getProductsSuccess(res.data));
      });

      // /api/chat/users
    } catch (error) {
      dispatch(user.actions.hasError(error));
    }
  };
}
