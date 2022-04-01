import React from "react";
import styled from "@emotion/styled";
import FertilizerInfo from "./fertilizer";
import Search from "./Search";

const FertilizerSearch = () => {
  return (
    <div>
      <Search />
      <FertilizerInfo />
    </div>
  );
};

export default FertilizerSearch;
