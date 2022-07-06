import Axios from "axios";
import React from "react";
import { useEffect } from "react";

function ProductDetailPage() {
  const getProductInfo = () => {
    Axios.post("/sss").then((response) => {
      if (response.data.success) {
        console.log(response.data);
      } else {
        alert("실패");
      }
    });
  };

  useEffect(() => {
    getProductInfo();
  }, []);
  return <div></div>;
}

export default ProductDetailPage;
