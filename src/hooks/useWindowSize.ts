import { useState, useEffect } from 'react';
import { debounce } from '../utils/debounce';

export const useWindowSize = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const isMobile = width < 834;

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', debounce(handleWindowResize, 100));
    handleWindowResize();
    return () =>
      window.removeEventListener(
        'resize',
        debounce(handleWindowResize, 100)
      );
  }, []);

  return { width, height, isMobile };
};