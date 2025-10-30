




"use client"
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const Providers = ({ children }) => {
    return (
        <div>
            <Provider store={store}>

                  


                {children}



            </Provider>
        </div>
    );
};

export default Providers;