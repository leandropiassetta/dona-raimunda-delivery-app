import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  user: {},
};

const reducers = {
  setProducts: (state, { payload }) => {
    state.products = payload;
  },
  addProduct: (state, { payload }) => {
    state.products = [...state.products, payload];
  },
  setQuantity: (state, { payload }) => {
    state.products = state.products.reduce((acc, cur) => {
      const product = cur;
      if (cur.name === payload.name) product.quantity = payload.quantity;
      return (product.quantity === 0) ? acc : [...acc, product];
    }, []);
  },
  removeProduct: (state, { payload }) => {
    state.products = state.products.filter((product) => product.name !== payload);
  },
  setUser: (state, { payload }) => {
    state.user = payload;
  },
};

export const userSlice = createSlice({
  name: 'productsCart',
  initialState,
  reducers,
});

export const {
  setProducts,
  addProduct,
  removeProduct,
  incrementQuantify,
  decrementQuantify,
  setQuantity,
  setUser,
} = userSlice.actions;

export default userSlice.reducer;
