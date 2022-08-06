import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../redux/actions/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [like, setLike] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const SHOWPASSWORD = (e) => {
    if (e.target.checked == true) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const LOGINSUBMIT = async (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
  };

  return (
    <div className="auth-box">
      <div className="auht-header">
        <div className="flex-column">
          <ion-icon name="logo-react"></ion-icon>
          <h1 className="text-title">Redux Authentication</h1>
          <p className="text-mute text-small">
            Login to your account and start the adventure 🚀
          </p>
        </div>
      </div>
      <form className="form-validation" onSubmit={LOGINSUBMIT}>
        <div className="group">
          <div className="input-field field-merges">
            <input
              type="text"
              id="email"
              className="form-input input-md"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field field-merges">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-input input-md"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-between">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="show-password"
              onChange={SHOWPASSWORD}
            />
            <label className="form-check-label" htmlFor="show-password">
              Show Password
            </label>
          </div>
          <Link to="/auth/forgot" className="text-link">
            Forgot Password?
          </Link>
        </div>
        <button type="submit" className="btn first-primary btn-block">
          Login
        </button>
      </form>
      <p className="text-mute text-small text-center">
        Already have an account?{" "}
        <Link to="/auth/register" className="text-link">
          Register
        </Link>
      </p>
      <div className="flex-center">
        <a
          href="https://github.com/Maha-tir/redux-project"
          target="_blank"
          className="link-btn"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <button
          className={like ? "toggle-btn active-animation" : "toggle-btn"}
          onClick={() => setLike(!like)}
        >
          <i
            className={
              like
                ? "fa-solid fa-thumbs-up active-animation"
                : "fa-regular fa-thumbs-up"
            }
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
