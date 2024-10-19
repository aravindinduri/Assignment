import React, { useEffect, useState } from 'react';

const Step = ({ logo, title, number }) => {
  const [animate, setAnimate] = useState(false);

  // Trigger the animation when the component is first rendered
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`flex flex-col items-center transition-all 
      ${animate ? 'animate-step-entry' : ''}`}>
      <div className="
        w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 
        bg-purple-900 rounded-full flex justify-center items-center 
        text-white font-semibold text-center shadow-lg 
        transition-transform transform hover:scale-105 
        flex flex-col
        "
      >
        <img
          src={logo}
          alt={title}
          className="
          w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12 mb-2 
          object-contain
          animate-fade-in-up
          "
        />
        <p className="text-xs sm:text-sm md:text-base mb-1 animate-fade-in">{`Step: ${number}`}</p>
        <p className="text-xs sm:text-sm md:text-base animate-fade-in">{title}</p>
      </div>
    </div>
  );
};

export default Step;
