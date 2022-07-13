import React from "react";
import { Badge, Descriptions } from "antd";
import { useState } from "react";
import { useEffect } from "react";

function ProductInfo(props) {
  const [Keyarr, setKeyarr] = useState();
  useEffect(() => {
    setKeyarr(Object.keys(props.prinfo));
  }, [props.prinfo]);
  return (
    <div>
      <Descriptions title={props.prinfo.title} bordered>
        <Descriptions.Item label={Keyarr ? Keyarr[0] : null}>
          {props.prinfo.price}
        </Descriptions.Item>
        <Descriptions.Item label={Keyarr ? Keyarr[2] : null}>
          {props.prinfo.continents}
        </Descriptions.Item>
        <Descriptions.Item label={Keyarr ? Keyarr[3] : null}>
          {props.prinfo.sold}
        </Descriptions.Item>
        <Descriptions.Item label={Keyarr ? Keyarr[4] : null}>
          {props.prinfo.views}
        </Descriptions.Item>
        <Descriptions.Item label={Keyarr ? Keyarr[8] : null}>
          {props.prinfo.description}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default ProductInfo;
