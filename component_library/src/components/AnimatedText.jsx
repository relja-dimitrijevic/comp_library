import './AnimatedText.css';

const TEXT = 'Blur to Focus';

function AnimatedText() {
  return (
    <div className="animated-text-container">
      <h1 className="animated-text-blur-focus" aria-label={TEXT}>
        {TEXT.split('').map((char, index) => (
          <span
            className="animated-text-blur-focus-letter"
            style={{ animationDelay: `${index * 60}ms` }}
            key={`${char}-${index}`}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default AnimatedText;

