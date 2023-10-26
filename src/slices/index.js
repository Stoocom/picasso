import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice.js';
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from '../service/post.js';

export default configureStore({
  reducer: {
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});