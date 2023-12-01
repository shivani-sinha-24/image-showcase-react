import React, { useState } from 'react';
import images from '../data/data'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageViewer = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1201 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 1200, min: 993 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 992, min: 601 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2
    }
  };

  const [selectedImage, setSelectedImage] = useState(images?.[0]);
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  const handlePrevClick = () => {
  const newIndex = (currentIndex - 1 + images.length) % images.length;
  setSelectedImage(images[newIndex]);
  setCurrentIndex(newIndex);
};

const handleNextClick = () => {
  const newIndex = (currentIndex + 1) % images.length;
  setSelectedImage(images[newIndex]);
  setCurrentIndex(newIndex);
};

const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div className="arrow top-left"onClick={handlePrevClick}>&lt;</div>
      <div className="showcase" style={{ backgroundImage: `url(${selectedImage})` }}>
        {selectedImage && <div className="showcase-image"></div>}
      </div>
      <div className="arrow top-right"onClick={handleNextClick}>&gt;</div>
      <div className="thumbnails">
      <Carousel 
        responsive={responsive} 
        infinite={true}
      >
      {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className={currentIndex === index ? 'selected-thumbnail' : ''}
          />
        ))}
      </Carousel>;
        
        
      </div>
    </div>
  );
};

export default ImageViewer;
