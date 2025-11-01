


'use client';

import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

export default function AddToCartButton() {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    console.log('Item added to cart!');
    setTimeout(() => setAdded(false), 1500); // Reset after 1.5s
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        added ? 'bg-green-500 text-white' : 'bg-pink-500 text-white hover:bg-pink-600'
      }`}
    >
      <FaCartPlus className={`text-lg ${added ? 'animate-bounce' : ''}`} />
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}
