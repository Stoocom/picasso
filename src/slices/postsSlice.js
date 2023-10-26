import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: [
    { id: 1, title: "Post 1"},
    { id: 2, title: "Post 2"},
  ],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.values.push(action.payload);
    },
    decrement: (state) => {
      state.values -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});


export const { increment, decrement, incrementByAmount } = postsSlice.actions;

export default postsSlice.reducer;