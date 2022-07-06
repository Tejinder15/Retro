import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/auth-context";
import herovideo from "../../Assets/Video/Hero.mp4";
import styles from "./Home.module.css";
import { Toaster } from "react-hot-toast";
const Home = () => {
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
    <div>
      <nav className={styles.navbar}>
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
      <Toaster />
      <div className={styles.hero_description_container}>
        <div className={styles.overlay}></div>
        <div className={styles.hero_text}>
          <h1 className={styles.hero_title}>
            Get Entertainment With Different Genre of Videos.
          </h1>
          <Link to="/videos" className={styles.signup}>
            Watch Now
          </Link>
        </div>
        <video className={styles.hero_video} autoPlay muted loop>
          <source src={herovideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export { Home };
