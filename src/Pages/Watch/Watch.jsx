import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { PlaylistModal } from "../../Components/PlaylistModal/PlaylistModal";
import styles from "./Watch.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLike, useAuth } from "../../Context";
import axios from "axios";
import { addToLike } from "../../Utils";

const Watch = () => {
  const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState([]);
  const { LikeState, LikeDispatch } = useLike();
  const { authState } = useAuth();
  const { token } = authState;
  const v = searchParams.get("v");

  const loadVideoData = async () => {
    const response = await axios.get(`/api/video/${v}`);
    setVideoData(response.data.video);
  };

  const addlikeHandler = async (video) => {
    if (token) {
      addToLike(videoData, token, LikeDispatch);
      setLiked(true);
    }
  };

  const togglePlaylistModal = () => {
    setIsPlaylistModalVisible(() => !isPlaylistModalVisible);
  };

  useEffect(() => loadVideoData(), []);
  return (
    <div>
      <Navbar />
      <div className="video_main_container">
        <div className={styles.watch_video_container}>
          <div className={styles.iframe_wrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${v}?autoplay=1&mute=1`}
              frameBorder={0}
              className={styles.watch_video}
            ></iframe>
          </div>
          <div className={styles.watch_video_footer}>
            <img
              src={videoData.logo}
              alt="logo"
              className={styles.channel_logo}
            />
            <div className={styles.video_brief}>
              <div>
                <div className={styles.watch_video_title}>
                  {videoData.title}
                </div>
                <div className={styles.watch_video_creator}>
                  {videoData.creator}
                </div>
              </div>
              <div className={styles.watch_video_actions}>
                <span
                  className={`material-icons-round ${liked && styles.liked}`}
                  onClick={() => addlikeHandler(videoData._id)}
                >
                  thumb_up
                </span>
                <span
                  className="material-icons-round"
                  onClick={togglePlaylistModal}
                >
                  playlist_add
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PlaylistModal
        visibility={isPlaylistModalVisible}
        toggleVisibility={togglePlaylistModal}
        video={videoData}
      />
      <Sidebar />
    </div>
  );
};

export { Watch };
