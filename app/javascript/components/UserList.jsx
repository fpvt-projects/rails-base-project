import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserList({ booladmin }) {
  const navigate = useNavigate();
  useEffect(() => {
    booladmin ? "n" : navigate("/");
  }, []);
  return (
    <div>
      <h1>Henlo! This is from UserList.jsx!</h1>
    </div>
  );
}

export default UserList;
