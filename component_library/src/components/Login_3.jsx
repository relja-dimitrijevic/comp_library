import { useState } from 'react';
import './Login_3.css';

function Login_3() {
    const [focused, setFocused] = useState({ email: false, password: false });

    return (
        <div className='login-wrapper-v3'>
            <div className='login-form-v3'>
                <h2 className='header-v3'>Welcome Back</h2>

                <div className='input-section-v3'>
                    <div className='input-wrapper-v3'>
                        <input
                            type='email'
                            className='input-v3'
                            placeholder=' '
                            onFocus={() => setFocused({ ...focused, email: true })}
                            onBlur={(e) => setFocused({ ...focused, email: e.target.value !== '' })}
                        />
                        <label className={`label-v3 ${focused.email ? 'focused' : ''}`}>Email</label>
                    </div>

                    <div className='input-wrapper-v3'>
                        <input
                            type='password'
                            className='input-v3'
                            placeholder=' '
                            onFocus={() => setFocused({ ...focused, password: true })}
                            onBlur={(e) => setFocused({ ...focused, password: e.target.value !== '' })}
                        />
                        <label className={`label-v3 ${focused.password ? 'focused' : ''}`}>Password</label>
                    </div>

                    <div className='pass-options-v3'>
                        <div className='remember-v3'>
                            <input type='checkbox' id='remember-v3' className='checkbox-v3' />
                            <label htmlFor='remember-v3'>Remember me</label>
                        </div>
                        <a href='#' className='forgot-v3'>Forgot?</a>
                    </div>
                </div>

                <button className='login-button-v3'>Log In</button>

                <div className='signup-section-v3'>
                    <span>Don't have an account? </span>
                    <a href='#'>Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default Login_3;

