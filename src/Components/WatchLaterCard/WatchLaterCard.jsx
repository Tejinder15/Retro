import styles from "./WatchLaterCard.module.css";
import { Link } from "react-router-dom";
const WatchLaterCard = (props) => {
  return (
    <div className={styles.horizontal_card}>
      <div className={styles.horizontal_image}>
        <Link to={`/watch?v=${props.vidId}`}>
          <img
            src={props.image}
            alt={props.title}
            className={styles.like_image}
          />
        </Link>
      </div>
      <div className={styles.basic_card_primary}>
        <Link to={`/watch?v=${props.vidId}`} className={styles.card_title}>
          {props.title}
        </Link>
        <p className={`small-text ${styles.creator}`}>{props.creator}</p>
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
