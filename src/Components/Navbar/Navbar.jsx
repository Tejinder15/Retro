import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/auth-context";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  const userName = authState.user;
  const redirect = useNavigate();

  const checkStatus = (userName) => {
    return userName ? "Logout" : "Login";
  };

  const logoutHandler = () => {
    redirect("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  const userHandler = (type) => {
    type === "Login" ? redirect("/login") : logoutHandler();
  };
  return (
    <nav className={`navbar ${styles.navbar}`}>
      <div className={styles.logo}>
        <h1>Retro</h1>
      </div>
      <ul className="nav-links">
        <li>
          {
            <button
              className={styles.login_btn}
              onClick={() => userHandler(checkStatus(userName))}
            >
              {checkStatus(userName)}
            </button>
          }
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
