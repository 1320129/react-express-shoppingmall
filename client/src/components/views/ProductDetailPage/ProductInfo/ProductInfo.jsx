import React from "react";
import { Button, Descriptions } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";

function ProductInfo(props) {
  const [Keyarr, setKeyarr] = useState();
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(addToCart(props.prinfo._id));
  };
  useEffect(() => {
    setKeyarr(Object.keys(props.prinfo));
  }, [props.prinfo]);
  return (
    <div className="pr-info-area">
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
      <br />
      <br />
      <br />
      <br />
      <div
        style={{ display: "flex", justifyContent: "center", flex: "0 0 100%" }}
      >
        <Button size="large" shape="round" type="danger" onClick={clickHandler}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
