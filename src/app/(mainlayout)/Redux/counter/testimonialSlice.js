



"use client"
// store/testimonialSlice.js
import { createSlice } from '@reduxjs/toolkit';

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState: {
    currentSlide: 0,
  },
  reducers: {
    setSlide: (state, action) => {
      state.currentSlide = action.payload;
    },
  },
});

export const { setSlide } = testimonialSlice.actions;
export default testimonialSlice.reducer;
