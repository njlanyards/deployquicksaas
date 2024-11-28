import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;   // text should be a string
  speed?: number; // speed is optional, defaulting to 100 if not provided
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const textDis = '';
    const interval = setInterval((textDis) => {
      textDis = displayedText + text[currentIndex];
      setDisplayedText(textDis);
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypewriterEffect;