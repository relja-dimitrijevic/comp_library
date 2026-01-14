import { useState, useEffect } from 'react';
import './Navbar_2.css';

function Navbar_2() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar-v2 ${isScrolled ? 'scrolled' : ''}`}>
            <div className='navbar-container-v2'>
                <div className='navbar-logo-v2'>LOGO</div>
                <div className='navbar-menu-v2'>
                    <a href='#' className='navbar-link-v2'>Home</a>
                    <a href='#' className='navbar-link-v2'>About</a>
                    <a href='#' className='navbar-link-v2'>Services</a>
                    <a href='#' className='navbar-link-v2'>Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar_2;

