import './Signup.css';

function Signup() {
    return (
        <div className='login-wrapper'>
            <div className='login-form'>
                <h2 className='header'>Sign Up</h2>

                <div className='input-section'>
                    <div className='email-input'>
                        <label>Email:</label>
                        <input
                            type='email'
                            id='email'
                            className='email'
                            placeholder='Enter your email'
                        />
                    </div>

                    <div className='password-input'>
                        <label>Password:</label>
                        <input
                            type='password'
                            id='password'
                            className='password'
                            placeholder='Create a password'
                        />
                    </div>

                    <div className='password-input'>
                        <label>Confirm Password:</label>
                        <input
                            type='password'
                            id='confirm-password'
                            className='password'
                            placeholder='Confirm your password'
                        />
                    </div>
                </div>

                <div className='login-btn-wrapper'>
                    <button className='login-button'>Create Account</button>

                    <div className='signup-section'>
                        <p className='signup'>Already have an account?</p>
                        <a href='' className='signup'>Log in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;