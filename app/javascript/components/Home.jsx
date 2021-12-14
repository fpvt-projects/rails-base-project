import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/sign_up");
  return (
    <div>
      <h1>This is from Home</h1>
      <button onClick={handleClick}>Register</button>
    </div>
  );
}

export default Home;
