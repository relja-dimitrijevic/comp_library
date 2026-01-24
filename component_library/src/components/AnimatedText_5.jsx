import { useEffect } from 'react';
import './AnimatedText_5.css';

function AnimatedText_5({
  text = 'GLASSY', /* Your text goes here */
  blurAmount = 0.01, /* Adjust these two values for different effect */
  displacementScale = 0.05

}) {
  useEffect(() => {
    const feImage = document.querySelector('#animated-text-5-feImage');
    if (feImage) {
      fetch('https://essykings.github.io/JavaScript/map.png')
        .then((response) => {
          return response.blob();
        })
        .then((blob) => {
          const objURL = URL.createObjectURL(blob);
          feImage.setAttribute('href', objURL);
        })
        .catch((error) => {
          console.warn('Failed to load displacement map:', error);
        });
    }
  }, []);

  return (
    <div className="animated-text-5-container">
      <div className="animated-text-5-wrapper">
        <span className="animated-text-5-content">{text}</span>
      </div>

      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter
            id="animated-text-5-glass"
            x="-50%"
            y="-100%"
            width="200%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="objectBoundingBox"
          >
            <feImage
              id="animated-text-5-feImage"
              x="-50%"
              y="-100%"
              width="200%"
              height="400%"
              result="map"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={blurAmount}
              result="blur"
            />
            <feDisplacementMap
              id="animated-text-5-disp"
              in="blur"
              in2="map"
              scale={displacementScale}
              xChannelSelector="G" /* Change between R G and B for different effect*/
              yChannelSelector="B" /* Change between R G and B for different effect*/
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default AnimatedText_5;
