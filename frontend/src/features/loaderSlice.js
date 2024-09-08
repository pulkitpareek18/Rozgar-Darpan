import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  isLoading: false,
};

// Create the slice
const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader(state) {
      state.isLoading = true;
    },
    hideLoader(state) {
      state.isLoading = false;
    },
  },
});

// Export actions
export const { showLoader, hideLoader } = loaderSlice.actions;

// Export reducer
export default loaderSlice.reducer;
