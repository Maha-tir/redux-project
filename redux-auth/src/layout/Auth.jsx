import React from "react";

const Auth = (props) => {
  return (
    <div className="auth-section-middle">
      <div className="auth-content">{props.children}</div>
    </div>
  );
};

export default Auth;
