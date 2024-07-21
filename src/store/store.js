import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../state/products.slice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  }
});

export default store;
