import { createSlice } from '@reduxjs/toolkit';

const global = createSlice({
  name: 'global',
  initialState: {
    openDrawer: true,
  },
  reducers: {
    toogleDrawer: (state, { payload }) => {
      console.log(payload);
      state.openDrawer = !state.openDrawer;
    },
  },
});

export const { toogleDrawer } = global.actions;

export default global.reducer;
