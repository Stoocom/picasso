import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.values = [ ...state.values, ...action.payload];
    }
  },
});


export const { addPosts } = postsSlice.actions;

export default postsSlice.reducer;