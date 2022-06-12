import React, { useEffect } from "react";
import Axios from "axios";

function LandingPage() {
  useEffect(() => {
    Axios.post("api/product/products").then((response) => {
      if (response.data.success) {
        console.log(response.data);
      } else {
        console.log("데이타를 불러오는데 실패 했습니다.");
      }
    });
  }, []);
  return <>viewpage</>;
}

export default LandingPage;
