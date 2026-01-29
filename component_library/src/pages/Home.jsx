import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allComponents } from '../utils/componentData';
import { getComponentIcon } from '../utils/getComponentIcon';
import './Home.css';

function Home() {
  const featuredComponents = useMemo(() => {
    const shuffled = [...allComponents];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 12);
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Reactive UI</h1>
        <p className="hero-subtitle">
          Production‑ready UI primitives with neon accents, built to drop into your next React app in seconds.
        </p>
        <div className="hero-actions">
          <Link to="/library" className="cta-button primary">
            Browse all components
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>{allComponents.length} Components</h3>
            <p>A growing set of carefully designed components built to be composed, customized, and reused across real projects.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive by Design</h3>
            <p>Every component is built to adapt naturally across mobile, tablet, and desktop without additional configuration.</p>
          </div>
          <div className="feature-card">
            <h3>Refined Visual Language</h3>
            <p>Minimal forms, soft motion, and subtle effects create a cohesive aesthetic without overpowering your content.</p>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <h2 className="section-title">Featured Components</h2>
        <div className="featured-grid">
          {featuredComponents.map((comp) => {
            const Icon = getComponentIcon(comp.name);
            return (
              <Link
                key={`${comp.name}-${comp.variant}`}
                to={`/components/${comp.name}/${comp.variant}`}
                className="featured-card"
              >
                <div className="featured-preview">
                  <Icon size={48} />
                </div>
                <div className="featured-info">
                  <h4>{comp.name} - {comp.variantName}</h4>
                  <span>Variant {comp.variant}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="view-all">
          <Link to="/library" className="cta-button secondary">
            View All Components →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

