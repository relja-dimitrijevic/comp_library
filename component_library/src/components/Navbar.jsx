import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>LOGO</div>
                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <a href='#' className='navbar-link'>Home</a>
                    <a href='#' className='navbar-link'>About</a>
                    <a href='#' className='navbar-link'>Services</a>
                    <a href='#' className='navbar-link'>Contact</a>
                </div>
                <button 
                    className='navbar-toggle'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

