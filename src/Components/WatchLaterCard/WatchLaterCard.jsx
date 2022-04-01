import styles from "./WatchLaterCard.module.css";
const WatchLaterCard = (props) => {
  return (
    <div className={styles.horizontal_card}>
      <div className="horizontal-card-image-title">
        <img
          src={props.image}
          alt={props.title}
          className={`basic-card-image horizontal-image ${styles.like_image}`}
        />
        <div className={styles.basic_card_primary}>
          <p className={styles.card_title}>{props.title}</p>
          <p className={`small-text ${styles.creator}`}>{props.creator}</p>
        </div>
      </div>
      <div className={styles.card_action}>
        <span
          className="material-icons-outlined"
          onClick={() => props.removefromwl(props.vidId)}
        >
          clear
        </span>
      </div>
    </div>
  );
};

export default WatchLaterCard;
