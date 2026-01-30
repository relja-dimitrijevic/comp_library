import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { componentCategories } from '../../utils/componentData';
import './Sidebar.css';

function Sidebar({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth <= 768 && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Set sidebar height dynamically to fix 100vh calculation issue
    if (isOpen) {
      const sidebarEl = document.querySelector('.sidebar');
      if (sidebarEl) {
        const setHeight = () => {
          const vh = window.innerHeight;
          sidebarEl.style.setProperty('height', `${vh}px`, 'important');
          sidebarEl.style.setProperty('min-height', `${vh}px`, 'important');
          sidebarEl.style.setProperty('max-height', `${vh}px`, 'important');
        };
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          setHeight();
        });
        window.addEventListener('resize', setHeight);
        return () => {
          window.removeEventListener('resize', setHeight);
          const sidebarEl = document.querySelector('.sidebar');
          if (sidebarEl) {
          sidebarEl.style.removeProperty('height');
          sidebarEl.style.removeProperty('min-height');
          sidebarEl.style.removeProperty('max-height');
          }
        };
      }
    } else {
      // Reset sidebar height when closed
      const sidebarEl = document.querySelector('.sidebar');
      if (sidebarEl) {
          sidebarEl.style.removeProperty('height');
          sidebarEl.style.removeProperty('min-height');
          sidebarEl.style.removeProperty('max-height');
      }
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleCategory = (categoryName) => {
    setExpandedCategory(prev => prev === categoryName ? null : categoryName);
  };

  const filteredCategories = componentCategories
    .filter(category => category.name !== 'Backgrounds')
    .map(category => ({
      ...category,
      components: category.components.filter(comp =>
        comp.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.components.length > 0);

  const isActive = (name, variant) => {
    const path = `/components/${name}/${variant}`;
    return location.pathname === path;
  };


  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-logo"></h1>
        </div>

        <div className="sidebar-search">
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <nav className="sidebar-nav">
          <Link
            to="/"
            className="nav-link home-link"
            onClick={() => {
              if (window.innerWidth <= 768) {
                onClose();
              }
            }}
          >
            Home
          </Link>
          <Link
            to="/library"
            className="nav-link library-link"
            onClick={() => {
              if (window.innerWidth <= 768) {
                onClose();
              }
            }}
          >
            Library
          </Link>

          <div className="categories">
            {filteredCategories.map(category => (
              <div key={category.name} className="category-group">
                <button
                  className="category-header"
                  onClick={() => toggleCategory(category.name)}
                  aria-expanded={expandedCategory === category.name}
                  aria-label={`${expandedCategory === category.name ? 'Collapse' : 'Expand'} ${category.name} category`}
                >
                  <span>{category.name}</span>
                  <span className={`category-arrow ${expandedCategory === category.name ? 'open' : ''}`}>
                    ▶
                  </span>
                </button>

                {expandedCategory === category.name && (
                  <div className="category-items">
                    {category.components.map(comp => (
                      <div key={comp.name} className="component-group">
                        <div className="component-name">{comp.name}</div>
                        <div className="variants-list">
                           {comp.variants.map(variant => (
                             <Link
                               key={variant}
                               to={`/components/${comp.name}/${variant}`}
                               className={`variant-link ${isActive(comp.name, variant) ? 'active' : ''}`}
                               onClick={() => {
                                 if (window.innerWidth <= 768) {
                                   onClose();
                                 }
                               }}
                             >
                               {comp.name} #{variant}
                             </Link>
                           ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;

