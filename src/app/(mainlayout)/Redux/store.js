


"use client"
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import heroTextReducer from './counter/heroTextSlice'
import languageReducer from "./counter/langugeSlice"
import curtainReducer from "./counter/curtainSlice"
import cvReducer from "./counter/cvSlice"




export const store = configureStore({
    reducer: {

        counter: counterReducer,
        heroText: heroTextReducer,
        language: languageReducer,  
        curtain: curtainReducer,
        cv: cvReducer,
    },
})