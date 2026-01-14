import './Button_5.css';

function Button_5({ children, onClick, ...props }) {
    return (
        <button className='button-3d' onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button_5;

