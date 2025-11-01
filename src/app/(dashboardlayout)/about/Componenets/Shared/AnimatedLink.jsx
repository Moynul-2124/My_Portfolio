



'use client';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { goToResume, returnHome } from '../../../../(mainlayout)/Redux/counter/pageTransitionSlice';
import { showCurtain } from '../../../../(mainlayout)/Redux/counter/curtainSlice';

const AnimatedLink = ({ href, children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(showCurtain());

    // Dispatch page transition state based on target
    if (href === '/resume') {
      dispatch(goToResume());
    } else if (href === '/') {
      dispatch(returnHome());
    }

    // Delay navigation to match animation
    setTimeout(() => {
      router.push(href);
    }, 800); // Match curtain animation duration
  };

  return (
    <button onClick={handleClick} className="hover:underline hover:cursor-pointer">
      {children}
    </button>
  );
};

export default AnimatedLink;
