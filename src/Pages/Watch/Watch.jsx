import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { PlaylistModal } from "../../Components/PlaylistModal/PlaylistModal";
import styles from "./Watch.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLike, useAuth } from "../../Context";
import axios from "axios";
import { addToLike, removeFromLike } from "../../Utils";
import { Toaster } from "react-hot-toast";
import Recommended from "../../Components/Recommended/Recommended";
import { useWatchLater } from "../../Context";
import { addToWatchlater } from "../../Utils";
const Watch = () => {
  const navigate = useNavigate();
  const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
  const [searchParams] = useSearchParams();
  const [recommVid, setRecommVid] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const {
    watchLaterDispatch,
    watchLaterState: { watchlater },
  } = useWatchLater();
  const {
    LikeState: { like },
    LikeDispatch,
  } = useLike();
  const { authState } = useAuth();
  const { token } = authState;
  const v = searchParams.get("v");

  const loadVideoData = async () => {
    const response = await axios.get(`/api/video/${v}`);
    setVideoData(response.data.video);
  };

  const loadRecomm = async () => {
    const response = await axios.get("/api/videos");
    const videoList = response.data.videos;
    setRecommVid(
      videoList.filter(
        (item) =>
          item.category === videoData.category && item._id !== videoData._id
      )
    );
  };

  const addlikeHandler = (video) => {
    if (token) {
      addToLike(videoData, token, LikeDispatch);
    } else {
      navigate("/login");
    }
  };

  const addToHandler = (vid) => {
    if (token) {
      addToWatchlater(vid, token, watchLaterDispatch);
    } else {
      navigate("/login");
    }
  };

  const removeLikeHandler = async (video) => {
    removeFromLike(video, token, LikeDispatch);
  };

  const togglePlaylistModal = () => {
    if (token) {
      setIsPlaylistModalVisible(() => !isPlaylistModalVisible);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    loadVideoData();
  }, [v]);

  useEffect(() => {
    loadRecomm();
  }, [videoData]);
  return (
    <div>
      <Navbar />
      <Toaster />
      <div className={styles.video_main_container}>
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
                {like.some((item) => item._id === videoData._id) ? (
                  <span
                    className={`material-icons-round ${styles.liked}`}
                    onClick={() => removeLikeHandler(videoData._id)}
                  >
                    thumb_up
                  </span>
                ) : (
                  <span
                    className="material-icons-round"
                    onClick={() => addlikeHandler(videoData._id)}
                  >
                    thumb_up
                  </span>
                )}
                <span
                  className="material-icons-round"
                  onClick={togglePlaylistModal}
                >
                  playlist_add
                </span>
                {watchlater.some((item) => item._id === videoData._id) ? (
                  <span
                    className="material-icons-round present"
                    title="Add to watchlater"
                  >
                    watch_later
                  </span>
                ) : (
                  <span
                    className="material-icons-round"
                    onClick={() => {
                      addToHandler(videoData);
                    }}
                    title="Add to watchlater"
                  >
                    watch_later
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.recomm_container}>
          {recommVid.map((item) => (
            <Recommended
              key={item._id}
              image={item.thumbnail}
              title={item.title}
              creator={item.creator}
              vidId={item._id}
            />
          ))}
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
