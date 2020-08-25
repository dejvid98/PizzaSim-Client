import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'admin',
  initialState: {
    token: '',
  },
  reducers: {
    addToken(state, action) {
      return { ...state, token: action.payload.token };
    },
  },
});

export const { addToken } = slice.actions;

export default slice.reducer;
