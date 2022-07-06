import styles from "./PlaylistVideoCard.module.css";
import { Link } from "react-router-dom";
const PlaylistVideoCard = (props) => {
  return (
    <div className={styles.horizontal_card}>
      <div className={styles.horizontal_image}>
        <Link to={`/watch?v=${props.vid._id}`}>
          <img
            src={props.vid.thumbnail}
            alt={props.vid.title}
            className={styles.like_image}
          />
        </Link>
      </div>
      <div className={styles.basic_card_primary}>
        <Link to={`/watch?v=${props.vid._id}`} className={styles.card_title}>
          {props.vid.title}
        </Link>
        <p className={`small-text ${styles.creator}`}>{props.vid.creator}</p>
      </div>
      <div className={styles.card_action}>
        <span
          className="material-icons-outlined"
          onClick={() => props.removeHandler(props.vid._id)}
        >
          clear
        </span>
      </div>
    </div>
  );
};

export default PlaylistVideoCard;
