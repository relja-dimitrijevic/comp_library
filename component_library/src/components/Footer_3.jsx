import './Footer_3.css';

function Footer_3() {
    return (
        <footer className='footer-v3'>
            <div className='footer-container-v3'>
                <div className='footer-main-v3'>
                    <div className='footer-links-v3'>
                        <a href='#' className='footer-link-v3'>Home</a>
                        <a href='#' className='footer-link-v3'>About</a>
                        <a href='#' className='footer-link-v3'>Services</a>
                        <a href='#' className='footer-link-v3'>Contact</a>
                    </div>
                    <div className='footer-newsletter-v3'>
                        <h3 className='newsletter-title-v3'>Newsletter</h3>
                        <div className='newsletter-form-v3'>
                            <input 
                                type='email' 
                                placeholder='Enter your email' 
                                className='newsletter-input-v3'
                            />
                            <button className='newsletter-button-v3'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom-v3'>
                    <p>&copy; 2024 Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer_3;

