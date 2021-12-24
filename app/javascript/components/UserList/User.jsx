import React from "react";
import styled from "styled-components";

function User({ firstname, lastname, email, admin, key }) {
  return (
    <Container>
      <Column>{firstname}</Column>
      <Column>{lastname}</Column>
      <Column>{email}</Column>
      <Column>{admin.toString()}</Column>
      <Column>
        <button>Edit</button>
        <button>Delete</button>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

const Column = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
export default User;
