


"use client"
import { configureStore } from '@reduxjs/toolkit';
import simaReducer from './Counter/simaSlice';

export const store = configureStore({
  reducer: {
    sima: simaReducer,
  },
});