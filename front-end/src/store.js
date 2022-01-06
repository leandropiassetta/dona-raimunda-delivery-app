import { configureStore } from '@reduxjs/toolkit';
import productsCard from './slices/productsCard';

const store = configureStore({
  reducer: {
    productsCard,
  },
});

export default store;
