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
        <h1 className="hero-title">Component Library</h1>
        <p className="hero-subtitle">
          A collection of {allComponents.length} beautifully designed, responsive React components
        </p>
        <div className="hero-actions">
          <Link to="/gallery" className="cta-button primary">
            Browse Components
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>75+ Variants</h3>
            <p>15 component types, each with 5 unique variants</p>
          </div>
          <div className="feature-card">
            <h3>Fully Responsive</h3>
            <p>All components adapt perfectly to any screen size</p>
          </div>
          <div className="feature-card">
            <h3>Modern Design</h3>
            <p>Clean, minimal aesthetic with neon accents</p>
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
          <Link to="/gallery" className="cta-button secondary">
            View All Components →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

