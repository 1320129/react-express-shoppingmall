import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((el, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", height: "150px" }}
              src={`http://localhost:5000/${el}`}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
