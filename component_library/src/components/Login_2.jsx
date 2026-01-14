import './Login_2.css';

function Login_2() {
    return (
        <div className='login-wrapper-v2'>
            <div className='login-split-v2'>
                <div className='login-image-v2'>
                    <img src='./images/image_1.jpg' alt='Background' />
                </div>
                <div className='login-form-v2'>
                    <h2 className='header-v2'>Login</h2>

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
                                placeholder='Enter your password'
                            />
                        </div>

                        <div className='pass-options-v2'>
                            <div className='remember-v2'>
                                <input type='checkbox' className='checkbox-v2' />
                                <span>Remember me</span>
                            </div>
                            <a href='#' className='forgot-v2'>Forgot password?</a>
                        </div>
                    </div>

                    <div className='login-btn-wrapper-v2'>
                        <button className='login-button-v2'>Log In</button>
                        <div className='signup-section-v2'>
                            <span>Don't have an account? </span>
                            <a href='#'>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login_2;

