import { useState } from "react";
import herovideo from "../../Assets/Video/Hero.mp4";
import styles from "./Hero.module.css";
const Hero = () => {
  const [logged, setLogged] = useState(false);
  const loginHandler = () => {
    setLogged(true);
  };
  return (
    <div className={styles.hero_container}>
      <nav className={styles.navbar}>
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
      <div className={styles.hero_description_container}>
        <h1 className={styles.hero_title}>
          Get Entertainment With Different Genre of Videos.
        </h1>
        <p className={styles.signup}>Watch Now</p>
      </div>
      <div className={styles.hero_video}>
        <video width="100%" autoPlay muted loop>
          <source src={herovideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
