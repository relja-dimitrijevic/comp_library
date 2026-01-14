import './Login_4.css';

function Login_4() {
    return (
        <div className='login-wrapper-v4'>
            <div className='login-form-v4'>
                <h2 className='header-v4'>Login</h2>

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

                    <div className='pass-options-v4'>
                        <div className='remember-v4'>
                            <input type='checkbox' id='remember-v4' className='checkbox-v4' />
                            <label htmlFor='remember-v4'>Remember me</label>
                        </div>
                        <a href='#' className='forgot-v4'>Forgot password?</a>
                    </div>
                </div>

                <button className='login-button-v4'>Sign In</button>

                <div className='signup-section-v4'>
                    <span>New user? </span>
                    <a href='#'>Create an account</a>
                </div>
            </div>
        </div>
    );
}

export default Login_4;

