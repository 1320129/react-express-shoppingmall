import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import "../../../index.css";
import ImageSlider from "../../utils/ImageSlider";

function LandingPage() {
  const [Product, setProduct] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };
    Axios.post("api/product/products", body).then((response) => {
      if (response.data.success) {
        setProduct(response.data.productData);
      } else {
        console.log("데이타를 불러오는데 실패 했습니다.");
      }
    });
  }, []);

  const renderCards = Product.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card cover={<ImageSlider images={product.images} />}>
          <Meta title={product.title} description={product.price} />
        </Card>
      </Col>
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
        <Row gutter={(16, 16)}>{renderCards}</Row>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="button">더보기</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
