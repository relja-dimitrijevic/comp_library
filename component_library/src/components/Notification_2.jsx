import './Notification_2.css';

function Notification_2() {
    const notifications = [
        { type: 'success', title: 'Success', message: 'Operation completed successfully!' },
        { type: 'error', title: 'Error', message: 'An error occurred. Please try again.' },
        { type: 'warning', title: 'Warning', message: 'Please check your input carefully.' },
        { type: 'info', title: 'Info', message: 'This is an informational message.' }
    ];

    return (
        <div className='notifications-container-v2'>
            <div className='notifications-grid-v2'>
                {notifications.map((notification, index) => (
                    <div key={index} className={`notification-v2 notification-${notification.type}-v2`}>
                        <div className='notification-icon-v2'>{notification.type === 'success' ? '✓' : notification.type === 'error' ? '✕' : notification.type === 'warning' ? '⚠' : 'ℹ'}</div>
                        <div className='notification-content-v2'>
                            <h4 className='notification-title-v2'>{notification.title}</h4>
                            <p className='notification-message-v2'>{notification.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification_2;
