import React from "react";
import User from "./User";
import styled from "styled-components";

function Users({ userlist }) {
  return (
    <Container>
      {userlist.map((user) => (
        <User
          firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
          admin={user.admin}
          key={user.id}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
`;

export default Users;
