import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from 'utils/calcTotalPrice';
import { getCartFrom } from 'utils/getCartFrom';

const {items, totalPrice} = getCartFrom();

const initialState = {
  totalPrice,
  items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    plusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, clearItems, minusItem, plusItem } = cartSlice.actions;

export default cartSlice.reducer;
