import Axios from "axios";
import React from "react";
import { useEffect } from "react";

function ProductDetailPage(props) {
  const getProductInfo = () => {
    let pageId = props.match.params.productId;
    Axios.get(`/api/product/products_id?id=${pageId}&type=single`).then(
      (response) => {
        if (response.data.success) {
          console.log(response.data);
        } else {
          alert("데이터를 불러오는데 실패 했습니다.");
        }
      }
    );
  };

  useEffect(() => {
    getProductInfo();
  }, []);
  return <div></div>;
}

export default ProductDetailPage;
