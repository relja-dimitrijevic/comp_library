import './Signup_5.css';

function Signup_5() {
    return (
        <div className='login-wrapper-v5'>
            <div className='login-form-v5'>
                <h2 className='header-v5'>SIGN UP</h2>

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

                    <div className='input-group-v5'>
                        <input
                            type='password'
                            className='input-v5'
                            placeholder='CONFIRM PASSWORD'
                        />
                    </div>
                </div>

                <button className='login-button-v5'>
                    <span className='button-text-v5'>SIGN UP</span>
                    <span className='button-glow-v5'></span>
                </button>

                <div className='signup-section-v5'>
                    <span>HAVE AN ACCOUNT? </span>
                    <a href='#'>LOG IN</a>
                </div>
            </div>
        </div>
    );
}

export default Signup_5;

