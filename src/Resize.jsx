import React from 'react';
import { useState, useEffect } from 'react';
import './Resize.scss';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {width}
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

const Resize = () => {
  const {width} = useWindowDimensions();

  return (
    <div className='screenWidth'>
      Ширина браузера: {width}
    </div>
  );
}

export default Resize;