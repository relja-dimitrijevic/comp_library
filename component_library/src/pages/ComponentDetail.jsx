import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getComponent } from '../utils/getComponent';
import { componentCategories } from '../utils/componentData';
import './ComponentDetail.css';

function ComponentDetail() {
  const { name, variant } = useParams();
  const navigate = useNavigate();
  const [showCode, setShowCode] = useState(false);
  const [jsxCode, setJsxCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [loadingCode, setLoadingCode] = useState(false);
  const currentVariant = parseInt(variant);
  const Component = getComponent(name, currentVariant);

  const componentInfo = componentCategories
    .flatMap(cat => cat.components)
    .find(comp => comp.name === name);

  const handleVariantChange = (newVariant) => {
    navigate(`/components/${name}/${newVariant}`);
  };

  const handlePrev = () => {
    if (currentVariant > 1) {
      handleVariantChange(currentVariant - 1);
    }
  };

  const handleNext = () => {
    if (currentVariant < 5) {
      handleVariantChange(currentVariant + 1);
    }
  };

  useEffect(() => {
    if (showCode) {
      loadComponentCode();
    }
  }, [showCode, name, currentVariant]);

  const loadComponentCode = async () => {
    setLoadingCode(true);
    const variantSuffix = currentVariant === 1 ? '' : `_${currentVariant}`;
    const componentName = `${name}${variantSuffix}`;
    
    try {
      // Use dynamic imports with ?raw to load files as text
      // Vite supports ?raw suffix for importing files as raw text
      try {
        const jsxModule = await import(`../components/${componentName}.jsx?raw`);
        setJsxCode(jsxModule.default);
      } catch (jsxError) {
        setJsxCode(`// Component file not found: ${componentName}.jsx\n// Error: ${jsxError.message}`);
      }

      try {
        const cssModule = await import(`../components/${componentName}.css?raw`);
        setCssCode(cssModule.default);
      } catch (cssError) {
        setCssCode(`/* CSS file not found: ${componentName}.css */\n/* Error: ${cssError.message} */`);
      }
    } catch (error) {
      setJsxCode(`// Error loading component code: ${error.message}`);
      setCssCode(`/* Error loading CSS: ${error.message} */`);
    } finally {
      setLoadingCode(false);
    }
  };

  const getJsxCode = () => {
    if (loadingCode) {
      return 'Loading code...';
    }
    const variantSuffix = currentVariant === 1 ? '' : `_${currentVariant}`;
    return jsxCode || `// ${name}${variantSuffix}.jsx\n// Component file not found`;
  };

  const getCssCode = () => {
    if (loadingCode) {
      return 'Loading code...';
    }
    const variantSuffix = currentVariant === 1 ? '' : `_${currentVariant}`;
    return cssCode || `/* ${name}${variantSuffix}.css */\n/* CSS file not found */`;
  };

  const copyJsxCode = () => {
    const variantSuffix = currentVariant === 1 ? '' : `_${currentVariant}`;
    navigator.clipboard.writeText(jsxCode);
    alert('JSX code copied to clipboard!');
  };

  const copyCssCode = () => {
    navigator.clipboard.writeText(cssCode);
    alert('CSS code copied to clipboard!');
  };

  if (!Component) {
    return (
      <div className="component-detail">
        <div className="error-message">
          <h2>Component not found</h2>
          <Link to="/gallery">Back to Gallery</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="component-detail">
      <div className="detail-header">
        <div className="header-info">
          <h1 className="component-title">{name}</h1>
          <div className="variant-info">
            <span className="component-variant-name">
              {componentInfo?.variantNames?.[currentVariant - 1] || `Variant ${currentVariant}`}
            </span>
            <span className="component-variant-badge">Variant {currentVariant}</span>
          </div>
        </div>
        <Link to="/gallery" className="back-link">← Back to Gallery</Link>
      </div>

      <div className="variant-switcher">
        {[1, 2, 3, 4, 5].map(v => (
          <button
            key={v}
            className={`variant-tab ${currentVariant === v ? 'active' : ''}`}
            onClick={() => handleVariantChange(v)}
            title={componentInfo?.variantNames?.[v - 1] || `Variant ${v}`}
          >
            <span className="variant-tab-name">{componentInfo?.variantNames?.[v - 1] || `Variant ${v}`}</span>
            <span className="variant-tab-number">{v}</span>
          </button>
        ))}
      </div>

      <div className="preview-section">
        <div className="preview-container">
          <Component />
        </div>
      </div>

      <div className="detail-actions">
        <button
          className="action-btn prev-btn"
          onClick={handlePrev}
          disabled={currentVariant === 1}
        >
          ← Previous
        </button>

        <button
          className="action-btn code-toggle"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide' : 'Show'} Code
        </button>

        <button
          className="action-btn next-btn"
          onClick={handleNext}
          disabled={currentVariant === 5}
        >
          Next →
        </button>
      </div>

      {showCode && (
        <div className="code-sections">
          <div className="code-section">
            <div className="code-header">
              <span className="code-file-name">
                {name}{currentVariant === 1 ? '' : `_${currentVariant}`}.jsx
              </span>
              <button
                className="copy-btn"
                onClick={copyJsxCode}
                disabled={loadingCode || !jsxCode}
              >
                Copy JSX
              </button>
            </div>
            <pre className="code-block">
              <code>{getJsxCode()}</code>
            </pre>
          </div>

          <div className="code-section">
            <div className="code-header">
              <span className="code-file-name">
                {name}{currentVariant === 1 ? '' : `_${currentVariant}`}.css
              </span>
              <button
                className="copy-btn"
                onClick={copyCssCode}
                disabled={loadingCode || !cssCode}
              >
                Copy CSS
              </button>
            </div>
            <pre className="code-block">
              <code>{getCssCode()}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComponentDetail;

