import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { componentCategories } from '../../utils/componentData';
import './Sidebar.css';

function Sidebar({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/6e8b7e88-67c1-4cd3-8431-714bebb646e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Sidebar.jsx:11',message:'useEffect entry',data:{isOpen,windowWidth:window.innerWidth,viewportHeight:window.innerHeight},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C'})}).catch(()=>{});
    // #endregion
    if (window.innerWidth <= 768 && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // #region agent log
    // Set sidebar height dynamically to fix 100vh calculation issue
    if (isOpen) {
      const sidebarEl = document.querySelector('.sidebar');
      if (sidebarEl) {
        const setHeight = () => {
          const vh = window.innerHeight;
          sidebarEl.style.setProperty('height', `${vh}px`, 'important');
          sidebarEl.style.setProperty('min-height', `${vh}px`, 'important');
          sidebarEl.style.setProperty('max-height', `${vh}px`, 'important');
          fetch('http://127.0.0.1:7242/ingest/6e8b7e88-67c1-4cd3-8431-714bebb646e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Sidebar.jsx:20',message:'Setting sidebar height dynamically',data:{windowInnerHeight:window.innerHeight,setHeight:`${window.innerHeight}px`,actualInlineHeight:sidebarEl.style.height},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'G'})}).catch(()=>{});
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
    // #endregion
    
    // #region agent log
    if (isOpen) {
      setTimeout(() => {
        const sidebarEl = document.querySelector('.sidebar');
        if (sidebarEl) {
          const computed = window.getComputedStyle(sidebarEl);
          const rect = sidebarEl.getBoundingClientRect();
          const isMobile = window.innerWidth <= 768;
          const stylesheet = Array.from(document.styleSheets).find(sheet => {
            try {
              return Array.from(sheet.cssRules).some(rule => rule.selectorText && rule.selectorText.includes('.sidebar'));
            } catch(e) { return false; }
          });
          let matchingRules = [];
          if (stylesheet) {
            try {
              matchingRules = Array.from(stylesheet.cssRules)
                .filter(rule => rule.selectorText && (rule.selectorText.includes('.sidebar') || rule.selectorText.includes('@media')))
                .map(rule => ({selector: rule.selectorText, cssText: rule.cssText, type: rule.type}));
            } catch(e) {}
          }
          fetch('http://127.0.0.1:7242/ingest/6e8b7e88-67c1-4cd3-8431-714bebb646e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Sidebar.jsx:25',message:'Sidebar computed styles',data:{isMobile,computedHeight:computed.height,computedMinHeight:computed.minHeight,actualHeight:rect.height,actualWidth:rect.width,computedWidth:computed.width,viewportHeight:window.innerHeight,viewportWidth:window.innerWidth,windowHeight:window.innerHeight,hasOpenClass:sidebarEl.classList.contains('open'),transform:computed.transform,position:computed.position,top:computed.top,bottom:computed.bottom,left:computed.left,zIndex:computed.zIndex,heightValue:computed.getPropertyValue('height'),widthValue:computed.getPropertyValue('width'),minHeightValue:computed.getPropertyValue('min-height'),inlineHeight:sidebarEl.style.height,inlineMinHeight:sidebarEl.style.minHeight,inlineMaxHeight:sidebarEl.style.maxHeight,matchingRulesCount:matchingRules.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'A,E,F'})}).catch(()=>{});
          const htmlComputed = window.getComputedStyle(document.documentElement);
          fetch('http://127.0.0.1:7242/ingest/6e8b7e88-67c1-4cd3-8431-714bebb646e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Sidebar.jsx:40',message:'HTML element styles',data:{htmlHeight:htmlComputed.height,htmlMinHeight:htmlComputed.minHeight,htmlActualHeight:document.documentElement.clientHeight,htmlScrollHeight:document.documentElement.scrollHeight},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'B'})}).catch(()=>{});
        }
        const rootEl = document.getElementById('root');
        const appContainer = document.querySelector('.app-container');
        if (rootEl && appContainer) {
          const rootComputed = window.getComputedStyle(rootEl);
          const appComputed = window.getComputedStyle(appContainer);
          const rootRect = rootEl.getBoundingClientRect();
          const appRect = appContainer.getBoundingClientRect();
          fetch('http://127.0.0.1:7242/ingest/6e8b7e88-67c1-4cd3-8431-714bebb646e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Sidebar.jsx:35',message:'Parent container dimensions',data:{rootHeight:rootComputed.height,rootActualHeight:rootRect.height,appHeight:appComputed.height,appActualHeight:appRect.height,bodyHeight:document.body.clientHeight,htmlHeight:document.documentElement.clientHeight,documentElementScrollHeight:document.documentElement.scrollHeight},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        }
      }, 100);
    }
    // #endregion
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleCategory = (categoryName) => {
    setExpandedCategory(prev => prev === categoryName ? null : categoryName);
  };

  const filteredCategories = componentCategories.map(category => ({
    ...category,
    components: category.components.filter(comp =>
      comp.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.components.length > 0);

  const isActive = (name, variant) => {
    const path = `/components/${name}/${variant}`;
    return location.pathname === path;
  };

  // #region agent log
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        fetch('http://127.0.0.1:7242/ingest/6e8b7e88-67c1-4cd3-8431-714bebb646e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Sidebar.jsx:38',message:'Current route info',data:{currentPath:location.pathname,isHomePage:location.pathname === '/',isGallery:location.pathname === '/gallery',isComponentDetail:location.pathname.startsWith('/components/')},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'F'})}).catch(()=>{});
      }, 50);
    }
  }, [isOpen, location.pathname]);
  // #endregion

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-logo">Component Library</h1>
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
            to="/gallery"
            className="nav-link gallery-link"
            onClick={() => {
              if (window.innerWidth <= 768) {
                onClose();
              }
            }}
          >
            Gallery
          </Link>

          <div className="categories">
            {filteredCategories.map(category => (
              <div key={category.name} className="category-group">
                <button
                  className="category-header"
                  onClick={() => toggleCategory(category.name)}
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

