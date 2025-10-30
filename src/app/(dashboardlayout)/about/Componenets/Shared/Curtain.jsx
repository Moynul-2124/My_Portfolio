

// components/Curtain.js
"use client";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideCurtain } from '../../../../(mainlayout)/Redux/counter/curtainSlice';

const Curtain = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.curtain.active);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        dispatch(hideCurtain());
      }, 1000); // hide after animation
    }
  }, [active, dispatch]);

  return <div className={`curtain ${active ? 'active' : ''}`} />;
};

export default Curtain;
