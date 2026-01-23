import "./ImageLayout_2.css";

function ImageLayout_2() {
  const images = [
    { src: "./images/image_1.jpg", caption: "Image One" },
    { src: "./images/image_2.jpg", caption: "Image Two" },
    { src: "./images/image_3.jpg", caption: "Image Three" },
    { src: "./images/image_4.jpg", caption: "Image Four" },
    { src: "./images/image_5.jpg", caption: "Image Five" },
    { src: "./images/image_6.jpg", caption: "Image Six" },
  ];

  return (
    <div className="image-layout-container masonry">
      <div className="masonry-grid">
        {images.map((item, index) => (
          <div key={index} className="masonry-item">
            <img src={item.src} alt={item.caption} />
            <div className="overlay">
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageLayout_2;