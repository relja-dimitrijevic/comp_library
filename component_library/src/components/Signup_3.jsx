import { useState } from 'react';
import './Signup_3.css';

function Signup_3() {
    const [focused, setFocused] = useState({
        email: false,
        password: false,
        confirmPassword: false,
    });

    return (
        <div className='login-wrapper-v3'>
            <div className='login-form-v3'>
                <h2 className='header-v3'>Create Account</h2>

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

                    <div className='input-wrapper-v3'>
                        <input
                            type='password'
                            className='input-v3'
                            placeholder=' '
                            onFocus={() => setFocused({ ...focused, confirmPassword: true })}
                            onBlur={(e) => setFocused({ ...focused, confirmPassword: e.target.value !== '' })}
                        />
                        <label className={`label-v3 ${focused.confirmPassword ? 'focused' : ''}`}>Confirm Password</label>
                    </div>
                </div>

                <button className='login-button-v3'>Create Account</button>

                <div className='signup-section-v3'>
                    <span>Already have an account? </span>
                    <a href='#'>Log in</a>
                </div>
            </div>
        </div>
    );
}

export default Signup_3;

