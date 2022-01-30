import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartElement: (state, action) => {
      state.push(action.payload);
    },
    clearCart: (state) => {
      state.splice(0, state.length);
    },
    deleteCartElement: (state, action) => {
      return (state = state.filter(({ id }) => id !== action.payload.id));
    },
    addCartQuantity: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addCartChange, clearCart, addCartQuantity, deleteCartElement } =
  cartSlice.actions;
export default cartSlice.reducer;
