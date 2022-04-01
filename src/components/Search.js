import React from "react";
import styled from "@emotion/styled";
import { Input, Button } from "./shared/Form";

const SearchForm = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin-left: 1rem;
  }
`;

const Search = () => {
  return (
    <SearchForm>
      <Input></Input>
      <Button>Search</Button>
    </SearchForm>
  );
};

export default Search;
