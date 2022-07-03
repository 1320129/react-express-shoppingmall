import React from "react";
import { Collapse } from "antd";
import { Checkbox } from "antd";
import { useEffect } from "react";
import { useState } from "react";
const { Panel } = Collapse;

function CheckBoxSection(props) {
  const [Check, setCheck] = useState([]);
  const toggleHandler = (index) => {
    let current = Check.indexOf(index);
    const newChecked = [...Check];
    if (current === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(current, 1);
    }
    setCheck(newChecked);
    props.handlerFilter(newChecked);
  };
  const CheckboxRender = props.list.map((item) => {
    return (
      <Checkbox
        key={item.id}
        onChange={() => toggleHandler(item.id)}
        checked={Check.indexOf(item.id) === -1 ? false : true}
      >
        {item.name}
      </Checkbox>
    );
  });
  return (
    <Collapse defaultActiveKey={["1"]} style={{ flex: "0 0 50%" }}>
      <Panel header="나라별 정렬" key="1">
        {CheckboxRender}
      </Panel>
    </Collapse>
  );
}

export default CheckBoxSection;
