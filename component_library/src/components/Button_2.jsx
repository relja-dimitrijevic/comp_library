import './Button_2.css';

function Button_2({ children, onClick, ...props }) {
    return (
        <button className='button-outlined' onClick={onClick} {...props}>
            <span className='button-border-top'></span>
            <span className='button-border-right'></span>
            <span className='button-border-bottom'></span>
            <span className='button-border-left'></span>
            {children}
        </button>
    );
}

export default Button_2;

