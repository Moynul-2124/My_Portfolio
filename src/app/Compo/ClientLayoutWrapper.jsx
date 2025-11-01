




'use client';

import React from 'react';
import Providers from '../(mainlayout)/provider';
import Header from '../(dashboardlayout)/about/Componenets/Fixed/Header';
import Curtain from '../(dashboardlayout)/about/Componenets/Shared/Curtain';

const ClientLayoutWrapper = ({children}) => {   
    return (
        <div>
            <Providers>
                <Header></Header>
                <Curtain></Curtain>
                    {children}

            </Providers>
        </div>
    );
};

export default ClientLayoutWrapper;
