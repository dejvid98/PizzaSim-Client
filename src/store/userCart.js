import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'userCart',
  initialState: {
    total: 0,
    time: 0,
    qty: 1,
    size: '',
    step: 'size',
    ing: '',
  },
  reducers: {
    updateTotal(state, action) {
      return {
        ...state,
        total: state.total + action.payload.total,
      };
    },
    updateTime(state, action) {
      return {
        ...state,
        time: state.time + action.payload.time,
      };
    },
    updateQty(state, action) {
      return {
        ...state,
        qty: action.payload.qty,
      };
    },
    updateSize(state, action) {
      return {
        ...state,
        size: action.payload.size,
      };
    },
    updateStep(state, action) {
      return {
        ...state,
        step: action.payload.step,
      };
    },
    updateIng(state, action) {
      return {
        ...state,
        ing: action.payload.ing,
      };
    },
  },
});

export const {
  updateTotal,
  updateQty,
  updateStep,
  updateTime,
  updateSize,
  updateIng,
} = slice.actions;

export default slice.reducer;
