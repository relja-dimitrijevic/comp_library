import { useState } from 'react';
import './Navbar_3.css';

function Navbar_3() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button 
                className={`sidebar-toggle ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`navbar-v3 ${isOpen ? 'open' : ''}`}>
                <div className='navbar-header-v3'>
                    <div className='navbar-logo-v3'>LOGO</div>
                </div>
                <div className='navbar-menu-v3'>
                    <a href='#' className='navbar-link-v3' onClick={() => setIsOpen(false)}>Home</a>
                    <a href='#' className='navbar-link-v3' onClick={() => setIsOpen(false)}>About</a>
                    <a href='#' className='navbar-link-v3' onClick={() => setIsOpen(false)}>Services</a>
                    <a href='#' className='navbar-link-v3' onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            </nav>
            {isOpen && <div className='sidebar-overlay-v3' onClick={() => setIsOpen(false)}></div>}
        </>
    );
}

export default Navbar_3;

