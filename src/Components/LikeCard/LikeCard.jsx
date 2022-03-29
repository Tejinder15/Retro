import styles from "./LikeCard.module.css";
const LikeCard = () => {
  return (
    <div className={styles.horizontal_card}>
      <div className="horizontal-card-image-title">
        <img
          src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg"
          alt="photo"
          className="basic-card-image horizontal-image"
        />
        <div className={styles.basic_card_primary}>
          <p className={styles.card_title}>Our Changing Planet</p>
          <p className={`small-text ${styles.creator}`}>by Kurt Wagner</p>
        </div>
        <div className={styles.card_action}>
          <button className="secondary-action">
            <span className="material-icons-outlined">more_vert</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeCard;
