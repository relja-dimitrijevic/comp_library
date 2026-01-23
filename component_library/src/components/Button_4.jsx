import './Button_4.css';
import { FaArrowRight } from 'react-icons/fa';

function Button_4({ children = 'Button', icon, onClick, ...props }) {
    return (
        <button className='button-icon' onClick={onClick} {...props}>
            <span className='button-icon-symbol'>{icon || <FaArrowRight />}</span>
            <span className='button-text'>{children}</span>
        </button>
    );
}

export default Button_4;

