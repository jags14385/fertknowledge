import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import FertilizerInfo from "./FertilizerInfo";
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
  const [search, { _loading, error, data }] = useLazyQuery(SEARCH_FERTILIZER);
  return (
    <div>
      <Search
        inputVal={inputVal}
        onChange={(e) => setinputVal(e.target.value)}
        onSearch={() => search({ variables: { match: `%${inputVal}%` } })}
      />
      {error ? (
        <span>Something went wrong</span>
      ) : (
        <FertilizerInfo newFertilizers={data ? data.fertilizer_info : null} />
      )}
    </div>
  );
};

export default FertilizerSearch;
