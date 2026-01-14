import { useState } from 'react';
import './Navbar_5.css';

function Navbar_5() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <nav className='navbar-v5'>
            <div className='navbar-container-v5'>
                <div className='navbar-logo-v5'>LOGO</div>
                <div className='navbar-menu-v5'>
                    <a href='#' className='navbar-link-v5'>Home</a>
                    <div className='navbar-dropdown-v5'>
                        <a 
                            href='#' 
                            className='navbar-link-v5'
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveDropdown(activeDropdown === 'services' ? null : 'services');
                            }}
                        >
                            Services
                            <span className={`dropdown-arrow-v5 ${activeDropdown === 'services' ? 'open' : ''}`}>▼</span>
                        </a>
                        {activeDropdown === 'services' && (
                            <div className='dropdown-menu-v5'>
                                <a href='#' className='dropdown-item-v5'>Web Design</a>
                                <a href='#' className='dropdown-item-v5'>Development</a>
                                <a href='#' className='dropdown-item-v5'>Consulting</a>
                            </div>
                        )}
                    </div>
                    <a href='#' className='navbar-link-v5'>About</a>
                    <a href='#' className='navbar-link-v5'>Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar_5;

