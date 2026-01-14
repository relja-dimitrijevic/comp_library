import { useState } from 'react';
import './Testimonials_2.css';

function Testimonials_2() {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className='testimonials-container-v2'>
            <h2 className='testimonials-title-v2'>Client Testimonials</h2>
            <div className='testimonials-carousel-v2'>
                <button className='carousel-btn-v2 prev-v2' onClick={prevTestimonial}>‹</button>
                <div className='testimonial-slide-v2'>
                    <div className='testimonial-image-v2'>
                        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                    </div>
                    <div className='testimonial-content-v2'>
                        <p className='testimonial-text-v2'>"{testimonials[currentIndex].content}"</p>
                        <div className='testimonial-author-v2'>
                            <h4 className='author-name-v2'>{testimonials[currentIndex].name}</h4>
                            <p className='author-role-v2'>{testimonials[currentIndex].role}</p>
                        </div>
                    </div>
                </div>
                <button className='carousel-btn-v2 next-v2' onClick={nextTestimonial}>›</button>
            </div>
            <div className='carousel-dots-v2'>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot-v2 ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Testimonials_2;
