import styles from "./LikeCard.module.css";
const LikeCard = (props) => {
  return (
    <div className={styles.horizontal_card}>
      <div className={styles.horizontal_image}>
        <img
          src={props.image}
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
          onClick={() => props.removefromlike(props.vidId)}
        >
          clear
        </span>
      </div>
    </div>
  );
};

export default LikeCard;
