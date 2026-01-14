import './Button_4.css';

function Button_4({ children, icon, onClick, ...props }) {
    return (
        <button className='button-icon' onClick={onClick} {...props}>
            {icon && <span className='button-icon-symbol'>{icon}</span>}
            <span className='button-text'>{children}</span>
        </button>
    );
}

export default Button_4;

