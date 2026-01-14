import './Notification_5.css';

function Notification_5() {
    const notifications = [
        { type: 'success', title: 'Success', message: 'Operation completed' },
        { type: 'error', title: 'Error', message: 'Something went wrong' },
        { type: 'warning', title: 'Warning', message: 'Please be careful' },
        { type: 'info', title: 'Information', message: 'New update available' }
    ];

    return (
        <div className='notifications-container-v5'>
            <div className='notifications-horizontal-v5'>
                {notifications.map((notification, index) => (
                    <div key={index} className={`banner-v5 banner-${notification.type}-v5`}>
                        <div className='banner-content-v5'>
                            <strong className='banner-title-v5'>{notification.title}:</strong>
                            <span className='banner-message-v5'>{notification.message}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification_5;
