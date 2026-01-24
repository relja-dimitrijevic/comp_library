import { useEffect, useRef } from 'react';
import './AnimatedText_4.css';

function AnimatedText_4({
  text = 'FROST', /* Your text goes here */
  width = 640,
  height = 220,
  fontSize = 72,
  radius = 40,
  transitionMs = 90,
  pixelScale = 8
}) {
  const svgRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const circle = circleRef.current;
    if (!svg || !circle) return;

    const viewBox = svg.viewBox.baseVal;

    const updateCirclePosition = (event) => {
      const rect = svg.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * viewBox.width;
      const y = ((event.clientY - rect.top) / rect.height) * viewBox.height;

      circle.setAttribute('cx', `${x}`);
      circle.setAttribute('cy', `${y}`);
    };

    const handleEnter = () => {
      circle.setAttribute('r', `${radius}`);
      circle.style.opacity = '1';
    };

    const handleLeave = () => {
      circle.setAttribute('r', '0');
      circle.style.opacity = '0';
    };

    svg.addEventListener('mousemove', updateCirclePosition);
    svg.addEventListener('mouseenter', handleEnter);
    svg.addEventListener('mouseleave', handleLeave);

    handleLeave();

    return () => {
      svg.removeEventListener('mousemove', updateCirclePosition);
      svg.removeEventListener('mouseenter', handleEnter);
      svg.removeEventListener('mouseleave', handleLeave);
    };
  }, [radius]);

  return (
    <div className="animated-text-4-container">
      <svg
        ref={svgRef}
        className="animated-text-4-svg"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={text}
        style={{ '--animated-text-4-transition': `${transitionMs}ms` }}
      >
        <defs>
          {/* Pixelation filter: coarse, blocky displacement for localized effect */}
          <filter
            id="animated-text-4-pixelate"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1"
              numOctaves="4"
              seed="1"
              result="noise"
            />
            <feComponentTransfer in="noise" result="quantized">
              <feFuncR type="discrete" tableValues="0 0.25 0.5 0.75 1" />
              <feFuncG type="discrete" tableValues="0 0.25 0.5 0.75 1" />
              <feFuncB type="discrete" tableValues="0 0.25 0.5 0.75 1" />
            </feComponentTransfer>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={pixelScale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Mask blur softens the edge of the pixelated zone */}
          <filter id="animated-text-4-mask-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>

          {/* Mask: black hides effect, white reveals it */}
          <mask id="animated-text-4-mask">
            <rect width="100%" height="100%" fill="black" />
            <circle
              ref={circleRef}
              className="animated-text-4-mask-circle"
              cx="0"
              cy="0"
              r="0"
              fill="white"
              filter="url(#animated-text-4-mask-blur)"
            />
          </mask>
        </defs>

        <text
          className="animated-text-4-text"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize }}
        >
          {text}
        </text>

        <text
          className="animated-text-4-text animated-text-4-text--pixelated"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#animated-text-4-pixelate)"
          mask="url(#animated-text-4-mask)"
          style={{ fontSize }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

export default AnimatedText_4;
