import './ImageLayout_5.css'

function ImageLayout_5() {
    const images = [
        { src: '/images/image_1.jpg', title: 'Image One' },
        { src: '/images/image_2.jpg', title: 'Image Two' },
        { src: '/images/image_3.jpg', title: 'Image Three' },
        { src: '/images/image_4.jpg', title: 'Image Four' }
    ];

    return (
        <div className='image-layout-container-v5'>
            <div className='images-staggered-v5'> 
                {images.map((item, index) => (
                    <div 
                        key={index} 
                        className={`image-item-v5 ${index % 2 === 0 ? 'left' : 'right'}`}
                        style={{ '--delay': `${index * 0.1}s` }}
                    >
                        <div className='image-frame-v5'>
                            <img src={item.src} alt={item.title} />
                        </div>
                        <div className='image-label-v5'>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageLayout_5

