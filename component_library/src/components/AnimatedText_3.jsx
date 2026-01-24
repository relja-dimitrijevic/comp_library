import { useState, useEffect } from 'react';
import './AnimatedText_3.css';

function AnimatedText_3() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Typewriter Effect';
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="animated-text-container">
      <h1 className="animated-text-typewriter">
        {displayedText}
        <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
      </h1>
    </div>
  );
}

export default AnimatedText_3;

