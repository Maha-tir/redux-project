import React from "react";

const Home = (props) => {
  return (
    <div className="Home-section-middle">
      <div className="Home-content">{props.children}</div>
    </div>
  );
};

export default Home;
