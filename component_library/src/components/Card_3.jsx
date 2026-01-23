import { FaImage, FaUser, FaCalendarAlt, FaTag, FaStar } from 'react-icons/fa';
import './Card_3.css';

function Card_3({ 
    title = "Glass Morphism Design", 
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image,
    author = "Alex Johnson",
    date = "May 10, 2024",
    tag = "Glass",
    rating = 4.5
}) {
    return (
        <div className='card-glass'>
            <div className='card-glass-image'>
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <div className='card-glass-image-placeholder'>
                        <FaImage size={48} />
                    </div>
                )}
            </div>
            <div className='card-glass-content'>
                <div className='card-glass-tag'>
                    <FaTag size={12} />
                    <span>{tag}</span>
                </div>
                <h3 className='card-glass-title'>{title}</h3>
                <p className='card-glass-description'>{description}</p>
                <div className='card-glass-rating'>
                    <FaStar size={14} />
                    <span>{rating}</span>
                </div>
                <div className='card-glass-footer'>
                    <div className='card-glass-author'>
                        <FaUser size={14} />
                        <span>{author}</span>
                    </div>
                    <div className='card-glass-date'>
                        <FaCalendarAlt size={14} />
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card_3;

