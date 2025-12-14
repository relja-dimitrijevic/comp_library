import "./ImageLayout_3.css";

function ImageLayout_3() {
  const images = [
    "./images/image_1.jpg",
    "./images/image_2.jpg",
    "./images/image_3.jpg",
    "./images/image_4.jpg"
  ];

  return (
    <div className="image-layout-container carousel-layout">
      <div className="scroll-wrapper">
        {images.map((src, index) => (
          <div key={index} className="carousel-card">
            <img src={src} alt="Not found" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageLayout_3;