import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";

function LandingPage() {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    Axios.post("api/product/products").then((response) => {
      if (response.data.success) {
        setProduct(response.data.productData);
      } else {
        console.log("데이타를 불러오는데 실패 했습니다.");
      }
    });
  }, []);

  const renderCards = Product.map((product, index) => {
    console.log(product);
    return (
      <Card key={index}>
        <Meta />
      </Card>
    );
  });
  return (
    <>
      <div style={{ width: "75%", margin: "3rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2>
            Let's Travel Anywhere <Icon type="rocket" />
          </h2>
        </div>
        {/* 필터 */}
        {/* 서치 */}
        {/* 카드 */}
        {renderCards}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="button">더보기</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
