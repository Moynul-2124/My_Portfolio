


"use client";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { showCurtain } from '../../../../(mainlayout)/Redux/counter/curtainSlice';

const AnimatedLink = ({ href, children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(showCurtain());
    setTimeout(() => {
      router.push(href);
    }, 800); // match curtain animation
  };

  return (
    <button onClick={handleClick} className="hover:underline hover:cursor-pointer">
      {children}
    </button>
  );
};

export default AnimatedLink;
