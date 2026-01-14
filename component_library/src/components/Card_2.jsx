import { useState } from 'react';
import './Card_2.css';

function Card_2({ title, description, image }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className={`card-flip ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className='card-front'>
                <div className='card-image'>
                    <img src={image} alt={title} />
                </div>
                <div className='card-content'>
                    <h3 className='card-title'>{title}</h3>
                </div>
            </div>
            <div className='card-back'>
                <div className='card-content'>
                    <p className='card-description'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card_2;

