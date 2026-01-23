import './Button_3.css';

function Button_3({ children = 'Button', onClick, ...props }) {
    return (
        <button className='button-gradient' onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button_3;

