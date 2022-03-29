import VideoCard from "./VideoCard/VideoCard";
import styles from "./VideoContainer.module.css";
const VideoContainer = ({ category }) => {
  return (
    <div className="video_category_container">
      <h2 className={styles.category_heading}>{category}</h2>
      <div className={styles.videolist_container}>
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default VideoContainer;
