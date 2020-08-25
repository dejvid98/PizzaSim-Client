import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'userCart',
  initialState: {
    total: 0,
    time: 0,
    qty: 0,
  },
  reducers: {
    updateTotal(state, action) {
      return {
        ...state,
        total: action.payload.total,
      };
    },
    updateTime(state, action) {
      return {
        ...state,
        time: action.payload.time,
      };
    },
    updateQty(state, action) {
      return {
        ...state,
        qty: action.payload.qty,
      };
    },
  },
});

export const { updateCart } = slice.actions;

export default slice.reducer;
