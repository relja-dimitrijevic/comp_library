import { FaImage, FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';
import './Card.css';

function Card({ 
    title = "Beautiful Design", 
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image,
    author = "John Doe",
    date = "March 15, 2024",
    tag = "Design"
}) {
    return (
        <div className='card'>
            <div className='card-image'>
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <div className='card-image-placeholder'>
                        <FaImage size={48} />
                    </div>
                )}
            </div>
            <div className='card-content'>
                <div className='card-tag'>
                    <FaTag size={12} />
                    <span>{tag}</span>
                </div>
                <h3 className='card-title'>{title}</h3>
                <p className='card-description'>{description}</p>
                <div className='card-footer'>
                    <div className='card-author'>
                        <FaUser size={14} />
                        <span>{author}</span>
                    </div>
                    <div className='card-date'>
                        <FaCalendarAlt size={14} />
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

