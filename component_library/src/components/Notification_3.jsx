import './Notification_3.css';

function Notification_3() {
    const notifications = [
        { type: 'success', message: 'Success! Your changes have been saved.' },
        { type: 'error', message: 'Error! Please check your connection and try again.' },
        { type: 'warning', message: 'Warning! This action cannot be undone.' },
        { type: 'info', message: 'Info! New update available for download.' }
    ];

    return (
        <div className='notifications-container-v3'>
            <div className='notifications-stack-v3'>
                {notifications.map((notification, index) => (
                    <div key={index} className={`notification-v3 notification-${notification.type}-v3`}>
                        <div className='notification-bar-v3'></div>
                        <p className='notification-message-v3'>{notification.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification_3;
