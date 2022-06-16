import { Link } from "react-router-dom";
import { useWatchLater } from "../../../Context";
import styles from "./VideoCard.module.css";
const VideoCard = (props) => {
  const {
    watchLaterState: { watchlater },
  } = useWatchLater();
  return (
    <div className={styles.videocard}>
      <div className={`${styles.basic_card} shadow`}>
        <Link to={"/watch" + `?v=${props.videoId}`} className={styles.Link}>
          <div
            className="basic-card-image-title"
            onClick={() => props.addToHistory(props.videoId)}
          >
            <img
              src={props.thumbnail}
              alt={props.title}
              className={`basic-card-image`}
            />
          </div>
        </Link>
        <div className={styles.basic_card_description}>
          <div className="basic-card-actions">
            <div className={styles.channel_logo_container}>
              <img
                src={props.logo}
                alt="logo"
                className={styles.channel_logo}
              />
            </div>
            <div className={styles.video_title}>{props.title}</div>
            <div className={styles.basic_card_actions_secondary}>
              {watchlater.some((item) => item._id === props.videoId) ? (
                <span
                  className="material-icons-round present"
                  title="Add to watchlater"
                >
                  add_box
                </span>
              ) : (
                <span
                  className="material-icons-round"
                  onClick={() => props.addToHandler(props.videoId)}
                  title="Add to watchlater"
                >
                  add_box
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
