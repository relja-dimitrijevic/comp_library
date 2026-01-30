import { useState } from 'react';
import { FaImage, FaUser, FaCalendarAlt, FaTag, FaArrowRight } from 'react-icons/fa';
import './Card_2.css';

function Card_2({ 
    title = "Interactive Card", 
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image,
    author = "Jane Smith",
    date = "April 20, 2024",
    tag = "Interactive"
}) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className={`card-flip ${isFlipped ? 'card-flip-flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className='card-flip-front'>
                <div className='card-flip-image'>
                    {image ? (
                        <img src={image} alt={title} loading="lazy" decoding="async" />
                    ) : (
                        <div className='card-flip-image-placeholder'>
                            <FaImage size={48} />
                        </div>
                    )}
                </div>
                <div className='card-flip-content'>
                    <div className='card-flip-tag'>
                        <FaTag size={12} />
                        <span>{tag}</span>
                    </div>
                    <h3 className='card-flip-title'>{title}</h3>
                    <div className='card-flip-hint'>
                        <span>Click to flip</span>
                        <FaArrowRight size={12} />
                    </div>
                </div>
            </div>
            <div className='card-flip-back'>
                <div className='card-flip-content'>
                    <h3 className='card-flip-title'>{title}</h3>
                    <p className='card-flip-description'>{description}</p>
                    <div className='card-flip-footer'>
                        <div className='card-flip-author'>
                            <FaUser size={14} />
                            <span>{author}</span>
                        </div>
                        <div className='card-flip-date'>
                            <FaCalendarAlt size={14} />
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card_2;

