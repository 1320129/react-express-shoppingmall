import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

function UpLoadProductPage() {
  const [InputTitle, setInputTitle] = useState();
  const [InputDesc, setInputDesc] = useState();
  const [InputPrice, setInputPrice] = useState(0);

  const ChangeTitle = (e) => {
    setInputTitle(e.currentTarget.value);
  };
  const ChangeDesc = (e) => {
    setInputDesc(e.currentTarget.value);
  };
  const ChangePrice = (e) => {
    setInputPrice(e.currentTarget.value);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginbottom: "2rem" }}>
        <Title level={2}>여행 상품 업로드</Title>
      </div>
      <Form>
        {/*dropzone*/}
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
        <select>
          <option value=""></option>
        </select>
        <br />
        <br />
        <Button>확인</Button>
      </Form>
    </div>
  );
}

export default UpLoadProductPage;
