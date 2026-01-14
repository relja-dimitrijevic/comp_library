import './Progress.css';

function Progress() {
    return (
        <div className='progress-container'>
            <h3 className='progress-title'>Progress Bars</h3>
            <div className='progress-item'>
                <div className='progress-label'>
                    <span>Loading</span>
                    <span className='progress-value'>75%</span>
                </div>
                <div className='progress-bar'>
                    <div className='progress-fill' style={{ width: '75%' }}></div>
                </div>
            </div>
            <div className='progress-item'>
                <div className='progress-label'>
                    <span>Upload</span>
                    <span className='progress-value'>50%</span>
                </div>
                <div className='progress-bar'>
                    <div className='progress-fill' style={{ width: '50%' }}></div>
                </div>
            </div>
            <div className='progress-item'>
                <div className='progress-label'>
                    <span>Download</span>
                    <span className='progress-value'>90%</span>
                </div>
                <div className='progress-bar'>
                    <div className='progress-fill' style={{ width: '90%' }}></div>
                </div>
            </div>
        </div>
    );
}

export default Progress;

