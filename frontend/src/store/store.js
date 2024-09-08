import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from '../features/loaderSlice.js';

const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});

export default store;
