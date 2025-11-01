

"use client"
// pages/resume.jsx
import { useDispatch } from 'react-redux';
import { returnHome } from '../../../(mainlayout)/Redux/counter/pageTransitionSlice';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Resume = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true); // trigger exit animation
    dispatch(returnHome());
    setTimeout(() => {
      router.push('/');
    }, 300); // match animation duration
  };

  return (
    <div className={`relative p-6 ${closing ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white hover:cursor-pointer text-xl bg-black px-3 py-1 rounded-full"
      >
        ❌
      </button>
      <h1 className="text-white text-3xl">My Resume</h1>
      {/* Resume content here */}
    </div>
  );
};

export default Resume;
