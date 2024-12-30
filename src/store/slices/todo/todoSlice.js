import { createSlice } from '@reduxjs/toolkit';
export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});
export const { increment } = todosSlice.actions;