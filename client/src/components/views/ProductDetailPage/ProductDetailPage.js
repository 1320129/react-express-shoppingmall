import Axios from "axios";
import React, { useState } from "react";
import ImageSection from "./ImageGallery/ImageGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import { useEffect } from "react";

function ProductDetailPage(props) {
  const [DetailProduct, setDetailProduct] = useState([]);

  const getProductInfo = () => {
    let pageId = props.match.params.productId;
    Axios.get(`/api/product/products_id?id=${pageId}&type=single`).then(
      (response) => {
        if (response.data.success) {
          setDetailProduct(response.data.product[0]);
        } else {
          alert("데이터를 불러오는데 실패 했습니다.");
        }
      }
    );
  };

  useEffect(() => {
    getProductInfo();
  }, []);
  return (
    <div className="pr-detail-area">
      {console.log(DetailProduct)}
      <ImageSection image={DetailProduct} />
      <ProductInfo prinfo={DetailProduct} />
    </div>
  );
}

export default ProductDetailPage;
