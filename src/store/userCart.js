import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'userCart',
  initialState: {
    total: 0,
    time: 0,
    qty: 1,
    size: '',
    step: 0,
    ing: '',
    fisrtname: '',
    lastname: '',
    address: '',
    phonenumber: '',
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
    decreaseQty(state, action) {
      return {
        ...state,
        qty: state.qty - 1,
        total: state.total / 2,
      };
    },
    increaseQty(state, action) {
      return {
        ...state,
        qty: state.qty + 1,
        total: state.total * 2,
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
    updateFirstname(state, action) {
      return {
        ...state,
        fisrtname: action.payload.fisrtname,
      };
    },
    updateLastname(state, action) {
      return {
        ...state,
        lastname: action.payload.lastname,
      };
    },
    updateAddress(state, action) {
      return {
        ...state,
        address: action.payload.address,
      };
    },
    updatePhonenumber(state, action) {
      return {
        ...state,
        phonenumber: action.payload.phonenumber,
      };
    },
  },
});

export const {
  updateTotal,
  increaseQty,
  decreaseQty,
  updateStep,
  updateTime,
  updateSize,
  updateIng,
  updateAddress,
  updateFirstname,
  updateLastname,
  updatePhonenumber,
} = slice.actions;

export default slice.reducer;
