import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { email } = useSelector((state) => state.login);
  return (
    <div className="home-section">
      <div className="home-content">
        <h1>email: {email}</h1>
      </div>
    </div>
  );
};

export default Home;
