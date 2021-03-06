import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";

function UpLoadFile(props) {
  const [Images2, setImages2] = useState([]);
  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/fomr-data" },
    };
    formData.append("file", files[0]);

    Axios.post("/api/product/image", formData, config).then((response) => {
      if (response.data.success) {
        setImages2([...Images2, response.data.filePath]);
        props.ImageUpdate([...Images2, response.data.filePath]);
      } else {
        alert("저장실패");
      }
    });
  };

  const deleteHandler = (image) => {
    let currentIndex = Images2.indexOf(image);
    let newImage = [...Images2];
    newImage.splice(currentIndex, 1);
    setImages2(newImage);
    props.ImageUpdate(newImage);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: 300,
              height: 240,
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Icon type="plus" style={{ fontSize: "3rem" }} />
          </div>
        )}
      </Dropzone>
      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images2.map((image, index) => (
          <div
            onClick={() => {
              deleteHandler(image);
            }}
            key={index}
          >
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:5000/${image}`}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpLoadFile;
