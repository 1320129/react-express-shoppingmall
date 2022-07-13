import React, { useEffect } from "react";
import { useState } from "react";
import ImageGallery from "react-image-gallery";

function ImageSection(props) {
  const [Images, setImages] = useState([]);
  useEffect(() => {
    if (props.image.images) {
      let imagesarr = [];
      props.image.images.map((item) => {
        imagesarr.push({
          original: `http://localhost:5000/${item}`,
          thumbnail: `http://localhost:5000/${item}`,
        });
      });
      setImages(imagesarr);
    }
  }, [props.image]);

  return (
    <div className="image-gallery-area">
      <ImageGallery items={Images} />;
    </div>
  );
}

export default ImageSection;
