import './Signup_4.css';

function Signup_4() {
    return (
        <div className='login-wrapper-v4'>
            <div className='login-form-v4'>
                <h2 className='header-v4'>Create Account</h2>

                <div className='input-section-v4'>
                    <div className='input-group-v4'>
                        <input
                            type='email'
                            className='input-v4'
                            placeholder='Email address'
                        />
                    </div>

                    <div className='input-group-v4'>
                        <input
                            type='password'
                            className='input-v4'
                            placeholder='Password'
                        />
                    </div>

                    <div className='input-group-v4'>
                        <input
                            type='password'
                            className='input-v4'
                            placeholder='Confirm password'
                        />
                    </div>
                </div>

                <button className='login-button-v4'>Sign Up</button>

                <div className='signup-section-v4'>
                    <span>Already have an account? </span>
                    <a href='#'>Log in</a>
                </div>
            </div>
        </div>
    );
}

export default Signup_4;

