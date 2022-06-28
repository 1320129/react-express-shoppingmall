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
      console.log(current);
      newChecked.splice(current, 1);
    }
    setCheck(newChecked);
    // console.log(Check);
    console.log(newChecked);
  };
  const CheckboxRender = props.list.map((item) => {
    return (
      <Checkbox
        key={item.id}
        onChange={() => toggleHandler(item.id)}
        checked={false}
      >
        {item.name}
      </Checkbox>
    );
  });
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="This is panel header 1" key="1">
        {CheckboxRender}
      </Panel>
    </Collapse>
  );
}

export default CheckBoxSection;
