import { useState } from 'react';
import './Notification.css';

function Notification() {
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'success', message: 'Operation completed successfully!' },
        { id: 2, type: 'error', message: 'An error occurred. Please try again.' },
        { id: 3, type: 'warning', message: 'Warning: Please check your input.' },
        { id: 4, type: 'info', message: 'Information: This is a notification.' }
    ]);

    const removeNotification = (id) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    return (
        <div className='notifications-container'>
            <div className='notifications-list'>
                {notifications.map((notification) => (
                    <div key={notification.id} className={`notification notification-${notification.type}`}>
                        <span className='notification-message'>{notification.message}</span>
                        <button 
                            className='notification-close'
                            onClick={() => removeNotification(notification.id)}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification;
