import { FaImage, FaUser, FaCalendarAlt, FaTag, FaHeart } from 'react-icons/fa';
import './Card_4.css';

function Card_4({ 
    title = "Minimalist Style", 
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    image,
    author = "Sarah Williams",
    date = "June 5, 2024",
    tag = "Minimal",
    likes = 128
}) {
    return (
        <div className='card-minimal'>
            <div className='card-minimal-border-accent'></div>
            <div className='card-minimal-image'>
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <div className='card-minimal-image-placeholder'>
                        <FaImage size={48} />
                    </div>
                )}
            </div>
            <div className='card-minimal-content'>
                <div className='card-minimal-tag'>
                    <FaTag size={12} />
                    <span>{tag}</span>
                </div>
                <h3 className='card-minimal-title'>{title}</h3>
                <p className='card-minimal-description'>{description}</p>
                <div className='card-minimal-footer'>
                    <div className='card-minimal-author'>
                        <FaUser size={14} />
                        <span>{author}</span>
                    </div>
                    <div className='card-minimal-meta'>
                        <div className='card-minimal-date'>
                            <FaCalendarAlt size={14} />
                            <span>{date}</span>
                        </div>
                        <div className='card-minimal-likes'>
                            <FaHeart size={14} />
                            <span>{likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card_4;

