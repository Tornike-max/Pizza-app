import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  orderData: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.orderId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    addInOrder(state, action) {
      state.orderData.push(action.payload);
    },
    clearOrder(state) {
      state.orderData = [];
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.orderId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.orderPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.orderId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.orderPrice;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  clearCart,
  addInOrder,
  increaseQuantity,
  decreaseQuantity,
  clearOrder,
} = cartSlice.actions;

export const getCurrentQuantity = (id) => (store) =>
  store.cart.cart.find((item) => item.orderId === id)?.quantity ?? 0;

export const getCurrentPrice = (id) => (store) =>
  store.cart.cart.find((item) => item.orderId === id)?.totalPrice;

export const getPrice = (id) => (store) =>
  store.cart.cart.find((item) => item.orderId === id)?.orderPrice;

export default cartSlice.reducer;
