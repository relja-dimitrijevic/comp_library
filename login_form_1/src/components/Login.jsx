import './Login.css'

function Login() {
    return (
        <div className='login-wrapper'>
            <div className='login-form'>
                <h2 className='header'>Login Form</h2>

                <div className='input-section'>
                    <input type='email' className='email'></input>
                    <input type='password' className='password'></input>
                    <div className='pass-options'>
                        <div className='remember-me'>
                            <input type='checkbox' className='remember-checkbox'></input>
                            <p className='remember-text'> Remember me! </p>
                        </div>
                        <a href='' className='forgot'>Forgot password?</a>
                    </div>
                </div>

                <button className='login-button'>Log In!</button>

                <div className='signup-section'>
                    <p className='signup'> Don't have an account? </p>
                    <a href='' className='signup'> Sign up now! </a>
                </div>
            </div>
        </div>
    )
}

export default Login