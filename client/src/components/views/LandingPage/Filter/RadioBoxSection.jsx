import { Radio } from "antd";
import React from "react";
import { Collapse } from "antd";
import { useState } from "react";
const { Panel } = Collapse;

function RadioBoxSection(props) {
  const [Value, setValue] = useState(0);
  //라디오 온체인지 함수
  const toggleHandler = (selectValue) => {
    setValue(selectValue.target.value);
    props.handlerFilter(selectValue.target.value);
  };
  //라디오 박스 렌더 함수
  const radioRender = props.list.map((item, index) => {
    return (
      <Radio.Button value={item.price} key={index}>
        {item.price + " 미만"}
      </Radio.Button>
    );
  });
  return (
    <Collapse defaultActiveKey={["0"]} style={{ flex: "0 0 50%" }}>
      <Panel header="가격 정렬" key="2">
        <Radio.Group
          defaultValue="a"
          buttonStyle="solid"
          onChange={toggleHandler}
          value={Value}
        >
          {radioRender}
        </Radio.Group>
      </Panel>
    </Collapse>
  );
}

export default RadioBoxSection;
