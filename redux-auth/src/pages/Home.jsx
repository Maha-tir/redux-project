import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/actions/action";
const Home = ({ logoutUser }) => {
  // const [login, setLogin] = useState("");
  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   hydrateStateWithLocalStorage();
  // }, [logoutUser]);
  // const hydrateStateWithLocalStorage = () => {
  //   if (localStorage.hasOwnProperty("login")) {
  //     let value = localStorage.getItem("login");
  //     try {
  //       value = JSON.parse(value);
  //       setLogin(value);
  //     } catch (error) {
  //       setLogin("");
  //     }
  //   }
  // };

  const history = useHistory();

  const logout = () => {
    dispatch(logoutInitiate());
    // localStorage.removeItem("login");
    history.push("/auth/login");
    console.clear();
  };
  return (
    <div className="home-section">
      <div className="home-content">
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Pricing
                </a>
                <button type="button" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
