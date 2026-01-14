import './ImageLayout_4.css'

function ImageLayout_4() {
    const images = [
        './images/image_1.jpg',
        './images/image_2.jpg',
        './images/image_3.jpg',
        './images/image_4.jpg'
    ];

    return (
        <div className='image-layout-container-v4'>
            <div className='images-grid-v4'> 
                {images.map((src, index) => (
                    <div key={index} className='image-wrapper-v4'>
                        <img src={src} alt={`Image ${index + 1}`} />
                        <div className='image-overlay-v4'>
                            <span className='overlay-text-v4'>Image {index + 1}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageLayout_4

