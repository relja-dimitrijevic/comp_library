import './ImageLayout.css'

function ImageLayout() {
    return (
        <div className='image-layout-container'>
            <div className='images'> 
                <div className='image-wrapper'> <img src='/images/image_1.jpg' alt='image not found' loading="lazy" decoding="async" /> </div>
                <div className='image-wrapper'> <img src='/images/image_2.jpg' alt='image not found' loading="lazy" decoding="async" /> </div>
                <div className='image-wrapper'> <img src='/images/image_3.jpg' alt='image not found' loading="lazy" decoding="async" /> </div>
                <div className='image-wrapper'> <img src='/images/image_4.jpg' alt='image not found' loading="lazy" decoding="async" /> </div>
            </div>
        </div>
    )
}

export default ImageLayout