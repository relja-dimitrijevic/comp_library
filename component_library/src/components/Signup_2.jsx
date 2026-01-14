import './Signup_2.css';

function Signup_2() {
    return (
        <div className='login-wrapper-v2'>
            <div className='login-split-v2'>
                <div className='login-image-v2'>
                    <img src='./images/image_1.jpg' alt='Background' />
                </div>
                <div className='login-form-v2'>
                    <h2 className='header-v2'>Sign Up</h2>

                    <div className='input-section-v2'>
                        <div className='input-group-v2'>
                            <label>Email</label>
                            <input
                                type='email'
                                className='input-v2'
                                placeholder='Enter your email'
                            />
                        </div>

                        <div className='input-group-v2'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='input-v2'
                                placeholder='Create a password'
                            />
                        </div>

                        <div className='input-group-v2'>
                            <label>Confirm Password</label>
                            <input
                                type='password'
                                className='input-v2'
                                placeholder='Confirm your password'
                            />
                        </div>
                    </div>

                    <div className='login-btn-wrapper-v2'>
                        <button className='login-button-v2'>Create Account</button>
                        <div className='signup-section-v2'>
                            <span>Already have an account? </span>
                            <a href='#'>Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup_2;

