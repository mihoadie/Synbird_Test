import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "./counterAPI";

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

export const getRecipesAsync = createAsyncThunk(
  "counter/getRecipes",
  async () => {
    const response = await getRecipes();
    return response;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    recipes: [],
    cart: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(getRecipesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecipesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.recipes = action.payload;
        console.log("recipes", action.payload);
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;

/*
  reducers: {
    increment: (state) => {
  
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  */
