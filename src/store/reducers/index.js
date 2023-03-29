// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project import
import chat from './chat';
import calendar from './calendar';
import menu from './menu';
import snackbar from './snackbar';
import productReducer from './product_bk';
import cartReducer from './cart';
import user from './ccyexchange';
//import ccyexchange from './ccyexchange';
import cat from './categories';
import pro from './products';
import batch from './batches';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  chat,
  user,
  cat,
  pro,
  batch,
  calendar,
  menu,
  snackbar,
  cart: persistReducer(
    {
      key: 'cart',
      storage,
      keyPrefix: 'mantis-ts-'
    },
    cartReducer
  )
  ,product: productReducer
});

export default reducers;
