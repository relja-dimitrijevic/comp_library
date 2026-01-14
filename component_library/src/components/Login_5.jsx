import './Login_5.css';

function Login_5() {
    return (
        <div className='login-wrapper-v5'>
            <div className='login-form-v5'>
                <h2 className='header-v5'>LOGIN</h2>

                <div className='input-section-v5'>
                    <div className='input-group-v5'>
                        <input
                            type='email'
                            className='input-v5'
                            placeholder='EMAIL'
                        />
                    </div>

                    <div className='input-group-v5'>
                        <input
                            type='password'
                            className='input-v5'
                            placeholder='PASSWORD'
                        />
                    </div>

                    <div className='pass-options-v5'>
                        <div className='remember-v5'>
                            <input type='checkbox' id='remember-v5' className='checkbox-v5' />
                            <label htmlFor='remember-v5'>Remember</label>
                        </div>
                        <a href='#' className='forgot-v5'>FORGOT?</a>
                    </div>
                </div>

                <button className='login-button-v5'>
                    <span className='button-text-v5'>LOGIN</span>
                    <span className='button-glow-v5'></span>
                </button>

                <div className='signup-section-v5'>
                    <span>NO ACCOUNT? </span>
                    <a href='#'>SIGN UP</a>
                </div>
            </div>
        </div>
    );
}

export default Login_5;

