import Axios from "axios";
import React from "react";
import { useEffect } from "react";

function ProductDetailPage() {
  const getProductInfo = () => {
    Axios.post("api/product/sss").then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    getProductInfo();
  });
  return <div></div>;
}

export default ProductDetailPage;
