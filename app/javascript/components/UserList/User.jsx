import React from "react";
import styled from "styled-components";

function User({ firstname, lastname, email, admin }) {
  return (
    <Container>
      <Column>
        <p>{firstname}</p>
      </Column>
      <Column>
        <p>{lastname}</p>
      </Column>
      <Column>
        <p>{email}</p>
      </Column>
      <Column>
        <p>{admin}</p>
      </Column>
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
`;
export default User;
