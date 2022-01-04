import React from "react";
import User from "./User";
import styled from "styled-components";

function Users({ userlist }) {
  return (
    <Container>
      <Header>
        <HeaderColumn>
          <p>Firstname</p>
        </HeaderColumn>
        <HeaderColumn>
          <p>Lastname</p>
        </HeaderColumn>
        <HeaderColumn>
          <p>Email</p>
        </HeaderColumn>
        <HeaderColumn>
          <p>Admin</p>
        </HeaderColumn>
        <HeaderColumn>
          <p>Action</p>
        </HeaderColumn>
      </Header>

      <Userlist>
        {userlist.map((user) => (
          <User
            key={user.id}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            admin={user.admin}
          />
        ))}
      </Userlist>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Userlist = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
`;
const HeaderColumn = styled.div`
  width: 20%;
  text-align: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  font-weight: bold;
`;
export default Users;
