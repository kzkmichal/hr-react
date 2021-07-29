import { useEffect, useState } from 'react';

const windowSize = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const useWindowSize = () => {
  const [dimension, setDimension] = useState(windowSize);

  const handleWindowResize = () => {
    setDimension(windowSize);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize());
    return () => {
      window.removeEventListener('resize', handleWindowResize());
    };
  }, []);

  return dimension;
};
