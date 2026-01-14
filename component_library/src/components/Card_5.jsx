import './Card_5.css';

function Card_5({ title, description, image }) {
    return (
        <div className='card-interactive'>
            <div className='card-image'>
                <img src={image} alt={title} />
                <div className='card-overlay'>
                    <h3 className='card-title'>{title}</h3>
                </div>
            </div>
            <div className='card-content'>
                <p className='card-description'>{description}</p>
            </div>
        </div>
    );
}

export default Card_5;

