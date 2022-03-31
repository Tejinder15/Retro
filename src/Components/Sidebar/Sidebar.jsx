import { useLocation, Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  const location = useLocation();
  const currLocation = location.pathname.slice(1);
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar_items}>
          <div className={styles.tooltip}>
            <Link to="/videos">
              <span
                className={`material-icons-round ${
                  currLocation === "videos" ? styles.active : styles.side_icon
                }`}
              >
                home
              </span>
            </Link>
            <span className={styles.tooltiptext}>Home</span>
          </div>
          <div className={styles.tooltip}>
            <Link to="/liked">
              <span
                className={`material-icons-round ${
                  currLocation === "liked" ? styles.active : styles.side_icon
                }`}
              >
                thumb_up
              </span>
            </Link>
            <span className={styles.tooltiptext}>Liked</span>
          </div>
          <div className={styles.tooltip}>
            <Link to="/history">
              <span
                className={`material-icons-round ${
                  currLocation === "history" ? styles.active : styles.side_icon
                }`}
              >
                history
              </span>
            </Link>
            <span className={styles.tooltiptext}>History</span>
          </div>
          <div className={styles.tooltip}>
            <Link to="/playlist">
              <span
                className={`material-icons-round ${
                  currLocation === "playlist" ? styles.active : styles.side_icon
                }`}
              >
                playlist_play
              </span>
            </Link>
            <span className={styles.tooltiptext}>Playlist</span>
          </div>
          <div className={styles.tooltip}>
            <Link to="/watchlater">
              <span
                className={`material-icons-round ${
                  currLocation === "watchlater"
                    ? styles.active
                    : styles.side_icon
                }`}
              >
                watch_later
              </span>
            </Link>
            <span className={styles.tooltiptext}>Watch Later</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
