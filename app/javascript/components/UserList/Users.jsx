import React, { useState } from "react";
import User from "./User";
import styled from "styled-components";
import EditForm from "../EditUser/EditForm";

function Users({ userlist, getAllUsers }) {
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const openEdit = () => setEdit(!edit);

  return (
    <Container>
      {edit ? (
        <EditForm
          openEdit={openEdit}
          userlist={userlist}
          editId={editId}
          getAllUsers={getAllUsers}
        />
      ) : (
        console.log("close edit")
      )}
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
            id={user.id}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            admin={user.admin}
            getAllUsers={getAllUsers}
            setEditId={setEditId}
            openEdit={openEdit}
          />
        ))}
      </Userlist>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Userlist = styled.div`
  width: 100%;
  max-height: 70%;
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
