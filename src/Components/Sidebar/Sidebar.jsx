import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar_items}>
          <div className={styles.tooltip}>
            <span className="material-icons-round side_icon active">home</span>
            <span className={styles.tooltiptext}>Home</span>
          </div>
          <div className={styles.tooltip}>
            <span className="material-icons-round side_icon active">
              thumb_up
            </span>
            <span className={styles.tooltiptext}>Liked</span>
          </div>
          <div className={styles.tooltip}>
            <span className="material-icons-round side_icon active">
              history
            </span>
            <span className={styles.tooltiptext}>History</span>
          </div>
          <div className={styles.tooltip}>
            <span className="material-icons-round side_icon active">
              playlist_play
            </span>
            <span className={styles.tooltiptext}>Playlist</span>
          </div>
          <div className={styles.tooltip}>
            <span className="material-icons-round side_icon active">
              watch_later
            </span>
            <span className={styles.tooltiptext}>Watch Later</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
