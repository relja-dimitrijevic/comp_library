import './Testimonials_5.css';

function Testimonials_5() {
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
        <div className='testimonials-container-v5'>
            <h2 className='testimonials-title-v5'>What People Say</h2>
            <div className='testimonials-stack-v5'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='testimonial-stack-item-v5'>
                        <div className='stack-image-v5'>
                            <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className='stack-content-v5'>
                            <p className='stack-text-v5'>"{testimonial.content}"</p>
                            <div className='stack-author-v5'>
                                <h4 className='stack-name-v5'>{testimonial.name}</h4>
                                <p className='stack-role-v5'>{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials_5;
