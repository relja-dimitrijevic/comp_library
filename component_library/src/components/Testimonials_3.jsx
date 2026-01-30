import './Testimonials_3.css';

function Testimonials_3() {
    const testimonials = [
        {
            name: 'John Doe',
            role: 'CEO',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: './images/image_1.jpg'
        },
        {
            name: 'Jane Smith',
            role: 'Designer',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: './images/image_2.jpg'
        },
        {
            name: 'Mike Johnson',
            role: 'Developer',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: './images/image_3.jpg'
        }
    ];

    return (
        <div className='testimonials-container-v3'>
            <h2 className='testimonials-title-v3'>Testimonials</h2>
            <div className='testimonials-list-v3'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='testimonial-item-v3'>
                        <div className='testimonial-quote-v3'>"</div>
                        <p className='testimonial-text-v3'>{testimonial.content}</p>
                        <div className='testimonial-author-v3'>
                            <img src={testimonial.image} alt={testimonial.name} className='author-image-v3' loading="lazy" decoding="async" />
                            <div className='author-details-v3'>
                                <h4 className='author-name-v3'>{testimonial.name}</h4>
                                <p className='author-role-v3'>{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials_3;
