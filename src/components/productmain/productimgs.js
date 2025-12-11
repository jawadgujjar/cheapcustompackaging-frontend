import React, { useState, useRef, useEffect, useCallback } from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import "./productimgs.css";

function Productimgs1({ images, selectedIndex, onImageSelect, title }) {
  const [selectedImage, setSelectedImage] = useState(selectedIndex || 0);
  const [zoomState, setZoomState] = useState({
    isZoomed: false,
    zoomX: 0,
    zoomY: 0,
  });
  const carouselRef = useRef(null);

  // Use a ref to track if we should call onImageSelect
  const shouldUpdateParentRef = useRef(true);

  // Filter out invalid images
  const validImages =
    images?.filter(
      (img) => img && typeof img === "string" && img.trim() !== ""
    ) || [];

  // Update local state when parent changes selectedIndex
  useEffect(() => {
    const newIndex = Math.max(
      0,
      Math.min(selectedIndex, validImages.length - 1)
    );

    // Only update if the index actually changed
    if (newIndex !== selectedImage) {
      setSelectedImage(newIndex);
      if (carouselRef.current) {
        carouselRef.current.goTo(newIndex, false);
      }
    }
  }, [selectedIndex, validImages.length]);

  const handleThumbnailClick = (index) => {
    if (index === selectedImage) return; // Don't do anything if same image

    setSelectedImage(index);
    if (carouselRef.current) {
      carouselRef.current.goTo(index, false);
    }

    // Call parent only if function exists and index changed
    if (typeof onImageSelect === "function" && shouldUpdateParentRef.current) {
      onImageSelect(index);
    }
  };

  // Handle carousel change - NO parent update from here
  const handleCarouselChange = (from, to) => {
    setSelectedImage(to);

    // Don't call parent from carousel change to prevent loop
    // Parent will update through thumbnail click only
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomState({
      isZoomed: true,
      zoomX: x,
      zoomY: y,
    });
  };

  const handleMouseLeave = () => {
    setZoomState({
      isZoomed: false,
      zoomX: 0,
      zoomY: 0,
    });
  };

  const getImageUrl = (img) => {
    return img && typeof img === "string" && img.trim() !== ""
      ? img
      : "https://via.placeholder.com/150";
  };

  if (validImages.length === 0) {
    return (
      <div className="product-image-container">
        <img
          src="https://via.placeholder.com/300"
          alt="No images available"
          className="main-product-image"
        />
      </div>
    );
  }

  return (
    <div className="product-image-container">
      {/* Thumbnail navigation */}
      <div className="thumbnail-vertical-wrapper">
        <button
          className="arrow-button"
          onClick={() => handleThumbnailClick(Math.max(selectedImage - 1, 0))}
          disabled={selectedImage === 0}
        >
          ▲
        </button>
        <div className="thumbnail-vertical">
          {validImages.map((src, index) => (
            <div
              key={index}
              className={`thumbnail-item-vertical ${
                selectedImage === index ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={getImageUrl(src)}
                alt={`${title || "Product"} - ${index + 1}`}
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          ))}
        </div>
        <button
          className="arrow-button"
          onClick={() =>
            handleThumbnailClick(
              Math.min(selectedImage + 1, validImages.length - 1)
            )
          }
          disabled={selectedImage === validImages.length - 1}
        >
          ▼
        </button>
      </div>

      {/* Main carousel */}
      <div className="main-carousel">
        <Carousel
          ref={carouselRef}
          dots={false}
          infinite={false}
          autoplay={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          beforeChange={handleCarouselChange}
          swipe={true}
          draggable={true}
        >
          {validImages.map((src, index) => (
            <div key={index} className="slide-container">
              <div
                className="zoom-wrapper"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={getImageUrl(src)}
                  alt={`${title || "Product"} - ${index + 1}`}
                  className={`main-product-image ${
                    zoomState.isZoomed ? "zoomed" : ""
                  }`}
                  style={{
                    transformOrigin: `${zoomState.zoomX}% ${zoomState.zoomY}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Productimgs1;
