import styles from "./PlaylistCard.module.css";
import { deletePlaylist } from "../../Utils";
import { useNavigate } from "react-router-dom";
import { usePlaylist, useAuth } from "../../Context";

const PlaylistCard = ({ title, playlistId }) => {
  const { playlistDispatch } = usePlaylist();
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { token } = authState;

  const handleDelete = () => {
    deletePlaylist({ token, playlistDispatch, playlistId });
  };

  const handleNavigation = () => {
    navigate(`/playlist/${playlistId}`);
  };

  return (
    <div className={styles.horizontal_card}>
      <span className={styles.card_title} onClick={handleNavigation}>
        {title}
      </span>
      <div className={styles.card_action}>
        <button className="secondary-action" onClick={handleDelete}>
          <span className="material-icons-round">delete_outline</span>
        </button>
      </div>
    </div>
  );
};

export default PlaylistCard;
