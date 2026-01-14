import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allComponents } from '../utils/componentData';
import { getComponentIcon } from '../utils/getComponentIcon';
import './Gallery.css';

function Gallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(allComponents.map(c => c.category))];

  const filteredComponents = useMemo(() => {
    return allComponents.filter(comp => {
      const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Component Gallery</h1>
        <p className="gallery-subtitle">Browse all {allComponents.length} component variants</p>
      </div>

      <div className="gallery-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="gallery-search"
          />
        </div>

        <div className="filter-container">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="gallery-grid">
        {filteredComponents.map((comp) => {
          const Icon = getComponentIcon(comp.name);
          return (
            <Link
              key={`${comp.name}-${comp.variant}`}
              to={`/components/${comp.name}/${comp.variant}`}
              className="component-card"
            >
              <div className="card-preview">
                <Icon size={64} />
              </div>
              <div className="card-info">
                <h3 className="card-name">{comp.name}</h3>
                <span className="card-variant">Variant {comp.variant}</span>
                <span className="card-category">{comp.category}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredComponents.length === 0 && (
        <div className="no-results">
          <p>No components found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default Gallery;

