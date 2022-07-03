import { Input } from "antd";
import React from "react";

const { Search } = Input;

function SearchInput(props) {
  const onSearch = (e) => {
    props.handlerInput(e);
  };
  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
}

export default SearchInput;
