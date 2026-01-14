import './Progress_5.css';

function Progress_5() {
    return (
        <div className='progress-container-v5'>
            <h3 className='progress-title-v5'>Loading States</h3>
            <div className='progress-examples-v5'>
                <div className='skeleton-loader-v5'>
                    <div className='skeleton-header-v5'></div>
                    <div className='skeleton-line-v5'></div>
                    <div className='skeleton-line-v5 short-v5'></div>
                </div>
                <div className='progress-indeterminate-v5'>
                    <div className='progress-bar-indeterminate-v5'></div>
                </div>
            </div>
        </div>
    );
}

export default Progress_5;

