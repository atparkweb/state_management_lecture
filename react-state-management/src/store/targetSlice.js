import { createSlice } from '@reduxjs/toolkit';

export const targetSlice = createSlice({
  name: 'target',
  initialState: {
    value: null
  },
  reducers: {
    targetOn: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { targetOn } = targetSlice.actions;

export default targetSlice.reducer;
