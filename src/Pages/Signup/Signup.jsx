import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/auth-context";
const Signup = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

  const checkPasswordHandler = () => {
    if (user.password !== user.confirmPassword) {
      alert("Password Does not Match");
    } else {
      return true;
    }
  };

  const signupHandler = async (event) => {
    event.preventDefault();
    if (checkPasswordHandler()) {
      try {
        const response = await axios.post("/api/auth/signup", {
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
        });
        if (response.status === 201) {
          authDispatch({
            type: "SIGNUP",
            payload: {
              user: response.data.createdUser,
              token: response.data.encodedToken,
            },
          });
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.createdUser)
          );
          navigate("/");
          alert("Signed up");
        } else {
          console.error("Error", response);
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  };
  return (
    <div className="auth-container">
      <h2 className="center-text">Signup</h2>
      <form action="" method="post">
        <div className={styles.name_container}>
          <div className="input-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="firstName"
              className={styles.fname}
              required
              autoComplete="off"
              id="first_name"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              value={user.firstName}
            />
          </div>
          <div className="input-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="lastName"
              className={styles.lname}
              required
              autoComplete="off"
              id="last_name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            name="email"
            className="textfield"
            required
            autoComplete="off"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={user.password}
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            required
            id="confirm_password"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            value={user.confirmPassword}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={signupHandler}
        >
          Create New Account
        </button>
      </form>
      <div className="signup-group">
        <Link to="/login" className="signup-link">
          Already have an account
        </Link>
        <span className="material-icons-outlined">navigate_next</span>
      </div>
    </div>
  );
};

export { Signup };
