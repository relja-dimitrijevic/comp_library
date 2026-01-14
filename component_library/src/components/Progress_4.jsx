import './Progress_4.css';

function Progress_4() {
    return (
        <div className='progress-container-v4'>
            <h3 className='progress-title-v4'>Step Progress</h3>
            <div className='step-progress-v4'>
                <div className='step-v4 completed-v4'>
                    <div className='step-number-v4'>1</div>
                    <div className='step-label-v4'>Step One</div>
                </div>
                <div className='step-line-v4 completed-v4'></div>
                <div className='step-v4 completed-v4'>
                    <div className='step-number-v4'>2</div>
                    <div className='step-label-v4'>Step Two</div>
                </div>
                <div className='step-line-v4 active-v4'></div>
                <div className='step-v4 active-v4'>
                    <div className='step-number-v4'>3</div>
                    <div className='step-label-v4'>Step Three</div>
                </div>
                <div className='step-line-v4'></div>
                <div className='step-v4'>
                    <div className='step-number-v4'>4</div>
                    <div className='step-label-v4'>Step Four</div>
                </div>
            </div>
        </div>
    );
}

export default Progress_4;

