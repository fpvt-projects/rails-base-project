import React from "react";
import styled from "styled-components";

function SearchBar() {
  return (
    <Container>
      <SearchBox type="text" placeholder="Search" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 45px;
  position: absolute;
  top: 0;
  background-color: #b7a7a7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
`;

const SearchBox = styled.input`
  height: 34px;
  width: 300px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
`;
export default SearchBar;
