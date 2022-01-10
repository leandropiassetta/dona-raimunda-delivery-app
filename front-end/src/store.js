import { configureStore } from '@reduxjs/toolkit';
import productsCart from './slices/productsCart';

const store = configureStore({
  reducer: {
    productsCart,
  },
});

export default store;
