import './Button.css';

function Button({ children, onClick, ...props }) {
    return (
        <button className='button-primary' onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;

