import React from "react";
import { Collapse } from "antd";
import { Checkbox } from "antd";
import { useEffect } from "react";
const { Panel } = Collapse;

function CheckBoxSection(props) {
  const CheckboxRender = props.list.map((item) => {
    return <Checkbox key={item.id}>{item.name}</Checkbox>;
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
