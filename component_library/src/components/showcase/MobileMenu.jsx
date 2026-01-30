import './MobileMenu.css';

function MobileMenu({ onToggle, isOpen }) {
  if (isOpen) return null;
  
  return (
    <button 
      className="mobile-menu-btn" 
      onClick={onToggle}
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default MobileMenu;

