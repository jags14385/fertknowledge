import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import FertilizerInfo from "./fertilizer";
import Search from "./Search";

const SEARCH_FERTILIZER = gql`
  query SearchFertilizerQuery($match: String) {
    fertilizer_info(where: { product: { _ilike: $match } }) {
      product_no
      product
    }
  }
`;

const FertilizerSearch = () => {
  const [inputVal, setinputVal] = useState("");
  const [search, { loading, error, data }] = useLazyQuery(SEARCH_FERTILIZER);

  return (
    <div>
      <Search
        inputVal={inputVal}
        onChange={(e) => setinputVal(e.target.value)}
        onSearch={() => search({ variables: { match: `%${inputVal}%` } })}
      />
      <FertilizerInfo
        newFertilizers={data ? data.fertilizer_info : null}
      ></FertilizerInfo>
    </div>
  );
};

export default FertilizerSearch;
