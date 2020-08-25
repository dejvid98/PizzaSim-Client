import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'userCart',
  initialState: {},
  reducers: {
    updateCart(state, action) {
      return {
        ...state,
      };
    },
  },
});

export const { updateCart } = slice.actions;

export default slice.reducer;
