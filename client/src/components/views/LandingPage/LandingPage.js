import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import "../../../index.css";
import ImageSlider from "../../utils/ImageSlider";
import { continent, price } from "./Filter/data";
import CheckBoxSection from "./Filter/CheckBoxSection";
import RadioBoxSection from "./Filter/RadioBoxSection";

function LandingPage() {
  const [Product, setProduct] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [Minnumber, setMinnumber] = useState(0);
  const [Filters, setFilters] = useState({
    continents: [],
    price: [],
  });
  //useeffet
  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };
    productReq(body);
  }, []);

  //상품불러오기 함수
  const productReq = (body) => {
    Axios.post("api/product/products", body).then((response) => {
      if (response.data.success) {
        if (body.more) {
          setProduct([...Product, ...response.data.productData]);
        } else {
          setProduct(response.data.productData);
        }
        setMinnumber(response.data.itemlength);
      } else {
        console.log("데이타를 불러오는데 실패 했습니다.");
      }
    });
  };

  //더보기 버튼 함수
  const moreHandler = () => {
    let skip = Skip + Limit;
    let body = {
      skip: skip,
      limit: Limit,
      more: true,
    };
    productReq(body);
    setSkip(skip);
  };
  //카드 렌더 함수
  const renderCards = Product.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card cover={<ImageSlider images={product.images} />}>
          <Meta title={product.title} description={product.price} />
        </Card>
      </Col>
    );
  });
  // 필터 요청
  const showFilterResult = (filters) => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    productReq(body);
    setSkip(0);
  };
  const handlePrice = (e) => {
    const data = price;
    let array = [];
    for (let key in data) {
      if (data[key].price === parseInt(e, 10)) {
        array = [data[key].price];
      }
    }
    return array;
  };
  // 필터 핸들러
  const handlerFilter = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;
    if (category === "price") {
      let priceValue = handlePrice(filters);
      newFilters[category] = priceValue;
    }
    console.log(newFilters);
    setFilters(newFilters);
    showFilterResult(newFilters);
  };

  //ui화면
  return (
    <>
      <div style={{ width: "75%", margin: "3rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2>
            Let's Travel Anywhere <Icon type="rocket" />
          </h2>
        </div>
        {/* 필터 */}
        <div style={{ display: "flex", gap: "16px" }}>
          <CheckBoxSection
            list={continent}
            handlerFilter={(filters) => handlerFilter(filters, "continents")}
          />
          <RadioBoxSection
            list={price}
            handlerFilter={(filters) => handlerFilter(filters, "price")}
          />
        </div>
        {/* 서치 */}
        {/* 카드 */}
        <Row gutter={(16, 16)}>{renderCards}</Row>

        {Minnumber >= Limit ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="button" onClick={moreHandler}>
              더보기
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default LandingPage;
