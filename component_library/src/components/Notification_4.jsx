import './Notification_4.css';

function Notification_4() {
    const notifications = [
        { type: 'success', message: 'Success message here' },
        { type: 'error', message: 'Error message here' },
        { type: 'warning', message: 'Warning message here' },
        { type: 'info', message: 'Info message here' }
    ];

    return (
        <div className='notifications-container-v4'>
            <div className='notifications-wrapper-v4'>
                {notifications.map((notification, index) => (
                    <div key={index} className={`toast-v4 toast-${notification.type}-v4`}>
                        <span className='toast-message-v4'>{notification.message}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification_4;
