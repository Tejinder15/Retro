import { useState } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const [logged, setLogged] = useState(false);
  const loginHandler = () => {
    setLogged(true);
  };
  return (
    <nav className={`navbar ${styles.navbar}`}>
      <div className={styles.logo}>
        <h1>Retro</h1>
      </div>
      <ul className="nav-links">
        <li>
          {logged ? (
            <img
              src="https://avatars.dicebear.com/api/micah/maya.svg?background=%23ef233c"
              alt="userAvatar"
              className={styles.avatar_sm}
            />
          ) : (
            <button className={styles.login_btn} onClick={loginHandler}>
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
