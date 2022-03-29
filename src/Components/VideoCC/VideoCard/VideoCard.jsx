import styles from "./VideoCard.module.css";
const VideoCard = () => {
  return (
    <div className="videocard">
      <div className="basic-card shadow">
        <div className="basic-card-image-title">
          <img
            src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg"
            alt="videoThumbnail"
            className={`basic-card-image`}
          />
        </div>
        <div className="basic-card-actions">
          <div className="basic-card-actions-primary">
            <span>Video Title</span>
          </div>
          <div className="basic-card-actions-secondary">
            <button className={`${styles.option_btn} secondary-action`}>
              <span class="material-icons-round">add_box</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
