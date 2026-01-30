import './Testimonials.css';

function Testimonials() {
    const testimonials = [
        {
            name: 'John Doe',
            role: 'CEO, Company Inc',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni qui quae.',
            image: './images/image_1.jpg'
        },
        {
            name: 'Jane Smith',
            role: 'Designer, Studio Co',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni qui quae.',
            image: './images/image_2.jpg'
        },
        {
            name: 'Mike Johnson',
            role: 'Developer, Tech Labs',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni qui quae.',
            image: './images/image_3.jpg'
        }
    ];

    return (
        <div className='testimonials-container'>
            <h2 className='testimonials-title'>What Our Clients Say</h2>
            <div className='testimonials-grid'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='testimonial-card'>
                        <div className='testimonial-content'>
                            <p className='testimonial-text'>"{testimonial.content}"</p>
                        </div>
                        <div className='testimonial-author'>
                            <div className='author-avatar'>
                                <img src={testimonial.image} alt={testimonial.name} loading="lazy" decoding="async" />
                            </div>
                            <div className='author-info'>
                                <h4 className='author-name'>{testimonial.name}</h4>
                                <p className='author-role'>{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
