import { useNavigate } from "react-router-dom";
import styles from "./PlaylistVideoCard.module.css";
const PlaylistVideoCard = (props) => {
  const navigate = useNavigate();

  const navWatch = (vidId) => {
    navigate("/watch" + `?v=${vidId}`);
  };

  return (
    <div className={styles.horizontal_card}>
      <div className="horizontal-card-image-title">
        <img
          src={props.vid.thumbnail}
          alt={props.vid.title}
          className={`basic-card-image horizontal-image ${styles.like_image}`}
        />
        <div
          className={styles.basic_card_primary}
          onClick={() => navWatch(props.vid._id)}
        >
          <p className={styles.card_title}>{props.vid.title}</p>
          <p className={`small-text ${styles.creator}`}>{props.vid.creator}</p>
        </div>
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
