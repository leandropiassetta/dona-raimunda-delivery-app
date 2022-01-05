import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const reducers = {
  setProducts: (state, { payload }) => {
    state.product = payload;
  },
  addProduct: (state, { payload }) => {
    state.products = [...state.products, payload];
  },
  removeProduct: (state, { payload }) => {
    state.products = state.products.filter((product) => product.name !== payload);
  },
  incrementQuantify: (state, { payload }) => {
    state.products = state.products.reduce((acc, cur) => {
      const product = cur;
      if (cur.name === payload) product.quantify += 1;
      return [...acc, product];
    }, []);
  },
  decrementQuantify: (state, { payload }) => {
    state.products = state.products.reduce((acc, cur) => {
      const product = cur;
      if (cur.name === payload) product.quantify -= 1;
      return [...acc, product];
    }, []);
  },
};

export const userSlice = createSlice({
  name: 'products',
  initialState,
  reducers,
});

export const {
  addProduct,
  removeProduct,
  incrementQuantify,
  decrementQuantify,
} = userSlice.actions;

export default userSlice.reducer;
