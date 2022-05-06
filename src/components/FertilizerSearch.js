import React, { useState, useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import FertilizerInfo from "./FertilizerInfo";
import Search from "./Search";

const SEARCH_FERTILIZER = gql`
  query SearchFertilizerQuery($match: String) {
    fertilizer_info(where: { product: { _ilike: $match } }) {
      product_no
      product
      product_constitutents {
        constitutents_detail {
          constituent_code
          constituent_name
          chemical_group
        }
      }
    }
  }
`;

const FertilizerSearch = () => {
  const [inputVal, setinputVal] = useState(undefined);
  const [search, { _loading, error, data }] = useLazyQuery(SEARCH_FERTILIZER);

  useEffect(() => {
    if (inputVal === undefined || inputVal.length > 2) {
      const stringValue = `%${inputVal}%`;
      search({ variables: { match: inputVal ? stringValue : `%%` } });
    }
  }, [inputVal]);

  return (
    <div>
      <Search
        inputVal={inputVal}
        onChange={(e) => {
          setinputVal(e.target.value);
          // console.log("Input val :::", inputVal);
          // console.log("E target value :::", e.target.value);
        }}
        // onSearch={() => search({ variables: { match: `%${inputVal}%` } })}
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
