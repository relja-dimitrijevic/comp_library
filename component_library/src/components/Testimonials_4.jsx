import './Testimonials_4.css';

function Testimonials_4() {
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
        <div className='testimonials-container-v4'>
            <h2 className='testimonials-title-v4'>Client Reviews</h2>
            <div className='testimonials-masonry-v4'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='testimonial-box-v4'>
                        <div className='testimonial-header-v4'>
                            <div className='author-avatar-v4'>
                                <img src={testimonial.image} alt={testimonial.name} loading="lazy" decoding="async" />
                            </div>
                            <div className='author-info-v4'>
                                <h4 className='author-name-v4'>{testimonial.name}</h4>
                                <p className='author-role-v4'>{testimonial.role}</p>
                            </div>
                        </div>
                        <p className='testimonial-text-v4'>{testimonial.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials_4;
