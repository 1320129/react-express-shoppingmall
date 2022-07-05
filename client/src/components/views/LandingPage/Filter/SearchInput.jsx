import { Input } from "antd";
import React from "react";
import { useState } from "react";

const { Search } = Input;

function SearchInput(props) {
  const [SearchTerm, setSearchTerm] = useState("");
  const onSearch = (e) => {
    setSearchTerm(e.target.value);
    props.handlerInput(e.target.value);
  };
  return (
    <Search
      placeholder="input search text"
      onChange={onSearch}
      style={{ width: 200 }}
    />
  );
}

export default SearchInput;
