import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-section'>
                    <h3 className='footer-title'>Company</h3>
                    <ul className='footer-links'>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h3 className='footer-title'>Resources</h3>
                    <ul className='footer-links'>
                        <li><a href='#'>Documentation</a></li>
                        <li><a href='#'>Support</a></li>
                        <li><a href='#'>Blog</a></li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h3 className='footer-title'>Connect</h3>
                    <div className='footer-social'>
                        <a href='#' className='social-link'>Twitter</a>
                        <a href='#' className='social-link'>GitHub</a>
                        <a href='#' className='social-link'>LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2024 Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

