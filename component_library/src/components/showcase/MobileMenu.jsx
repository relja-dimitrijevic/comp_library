import './MobileMenu.css';

function MobileMenu({ onToggle, isOpen }) {
  if (isOpen) return null;
  
  return (
    <button className="mobile-menu-btn" onClick={onToggle}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default MobileMenu;

