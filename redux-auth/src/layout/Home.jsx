import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = (props) => {
  // const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const { user, error } = useSelector((state) => state.auth);

  const content = <h1>You're not login</h1>;
  return (
    <div className="Home-section-middle">
      <div className="Home-content">
        {user ? <>{props.children}</> : content}
      </div>
    </div>
  );
};

export default Home;
