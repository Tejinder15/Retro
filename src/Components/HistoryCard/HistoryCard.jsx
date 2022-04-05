import styles from "./HistoryCard.module.css";
const HistoryCard = (props) => {
  return (
    <div className={styles.horizontal_card}>
      <div className={styles.horizontal_image}>
        <img
          src={props.thumbnail}
          alt={props.title}
          className={styles.like_image}
        />
      </div>
      <div className={styles.basic_card_primary}>
        <p className={styles.card_title}>{props.title}</p>
        <p className={`small-text ${styles.creator}`}>{props.creator}</p>
      </div>
      <div className={styles.card_action}>
        <span
          className="material-icons-outlined"
          onClick={() => props.removeHistory(props.videoId)}
        >
          close
        </span>
      </div>
    </div>
  );
};

export default HistoryCard;
