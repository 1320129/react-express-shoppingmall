import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import UpLoadFile from "../../utils/UpLoadFile";
import Axios from "axios";
const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

function UpLoadProductPage(props) {
  const [InputTitle, setInputTitle] = useState();
  const [InputDesc, setInputDesc] = useState();
  const [InputPrice, setInputPrice] = useState(0);
  const [Continent, setContinent] = useState(1);
  const [Images, setImages] = useState([]);

  const ChangeTitle = (e) => {
    setInputTitle(e.currentTarget.value);
  };
  const ChangeDesc = (e) => {
    setInputDesc(e.currentTarget.value);
  };
  const ChangePrice = (e) => {
    setInputPrice(e.currentTarget.value);
  };
  const ChangeContinent = (e) => {
    setContinent(e.currentTarget.value);
  };
  const ImageUpdateHandler = (image) => {
    setImages(image);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!InputTitle || !InputDesc || !InputPrice || !Continent || !Images) {
      alert("데이터 값을 모두 입력해주세요!");
    }
    let body = {
      writer: props.user.userData._id,
      title: InputTitle,
      description: InputDesc,
      price: InputPrice,
      images: Images,
      continents: Continent,
    };
    Axios.post("/api/product", body).then((response) => {
      if (response.data.success) {
        alert("등록이 완료 되었습니다.");
        props.history.push("/");
      } else {
        alert("오류가 발생되었습니다.");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginbottom: "2rem" }}>
        <Title level={2}>여행 상품 업로드</Title>
      </div>
      <Form onSubmit={submitHandler}>
        {/*dropzone*/}
        <UpLoadFile ImageUpdate={ImageUpdateHandler} />
        <br />
        <br />
        <label>이름</label>
        <Input onChange={ChangeTitle} value={InputTitle} />
        <br />
        <br />
        <label>설명</label>
        <TextArea onChange={ChangeDesc} value={InputDesc}></TextArea>
        <br />
        <br />
        <label>가격($)</label>
        <Input type="number" onChange={ChangePrice} value={InputPrice} />
        <br />
        <br />
        <select value={Continent} onChange={ChangeContinent}>
          {Continents.map((item) => {
            return (
              <option value={item.key} key={item.key}>
                {item.value}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <Button type="submit" onClick={submitHandler}>
          확인
        </Button>
      </Form>
    </div>
  );
}

export default UpLoadProductPage;
