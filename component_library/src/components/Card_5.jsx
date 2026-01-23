import { FaImage, FaUser, FaCalendarAlt, FaTag, FaShareAlt } from 'react-icons/fa';
import './Card_5.css';

function Card_5({ 
    title = "Interactive Hover Card", 
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    image,
    author = "Michael Brown",
    date = "July 12, 2024",
    tag = "Interactive"
}) {
    return (
        <div className='card-interactive'>
            <div className='card-interactive-image'>
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <div className='card-interactive-image-placeholder'>
                        <FaImage size={48} />
                    </div>
                )}
                <div className='card-interactive-overlay'>
                    <div className='card-interactive-tag'>
                        <FaTag size={12} />
                        <span>{tag}</span>
                    </div>
                    <h3 className='card-interactive-title'>{title}</h3>
                    <button className='card-interactive-share-btn'>
                        <FaShareAlt size={16} />
                    </button>
                </div>
            </div>
            <div className='card-interactive-content'>
                <p className='card-interactive-description'>{description}</p>
                <div className='card-interactive-footer'>
                    <div className='card-interactive-author'>
                        <FaUser size={14} />
                        <span>{author}</span>
                    </div>
                    <div className='card-interactive-date'>
                        <FaCalendarAlt size={14} />
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card_5;

