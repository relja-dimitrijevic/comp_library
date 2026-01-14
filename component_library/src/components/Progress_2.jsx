import './Progress_2.css';

function Progress_2() {
    return (
        <div className='progress-container-v2'>
            <h3 className='progress-title-v2'>Circular Progress</h3>
            <div className='progress-circles-v2'>
                <div className='progress-circle-wrapper-v2'>
                    <svg className='progress-circle-v2' viewBox='0 0 100 100'>
                        <circle className='progress-circle-bg-v2' cx='50' cy='50' r='45'></circle>
                        <circle className='progress-circle-fill-v2' cx='50' cy='50' r='45' style={{ strokeDashoffset: '70.686' }}></circle>
                    </svg>
                    <div className='progress-percentage-v2'>75%</div>
                </div>
                <div className='progress-circle-wrapper-v2'>
                    <svg className='progress-circle-v2' viewBox='0 0 100 100'>
                        <circle className='progress-circle-bg-v2' cx='50' cy='50' r='45'></circle>
                        <circle className='progress-circle-fill-v2' cx='50' cy='50' r='45' style={{ strokeDashoffset: '141.372' }}></circle>
                    </svg>
                    <div className='progress-percentage-v2'>50%</div>
                </div>
                <div className='progress-circle-wrapper-v2'>
                    <svg className='progress-circle-v2' viewBox='0 0 100 100'>
                        <circle className='progress-circle-bg-v2' cx='50' cy='50' r='45'></circle>
                        <circle className='progress-circle-fill-v2' cx='50' cy='50' r='45' style={{ strokeDashoffset: '28.274' }}></circle>
                    </svg>
                    <div className='progress-percentage-v2'>90%</div>
                </div>
            </div>
        </div>
    );
}

export default Progress_2;

