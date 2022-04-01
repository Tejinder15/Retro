import VideoCard from "./VideoCard/VideoCard";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./VideoContainer.module.css";
import { addToWatchlater } from "../../Utils/addToWatchlater";
import { useWatchLater } from "../../Context/WatchLaterContext/watchlater-context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/auth-context";
const VideoContainer = ({ category }) => {
  const [videoListData, setVideoListData] = useState([]);
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchlater } = watchLaterState;
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { token } = authState;

  const addToHandler = async (videoid) => {
    if (token) {
      const video = videoListData.find((item) => item._id === videoid);
      addToWatchlater(video, token, watchLaterDispatch);
    } else {
      navigate("/login");
    }
  };

  const loadVideos = async () => {
    const response = await axios.get("/api/videos");
    const videoList = response.data.videos;
    const categoryList = (cat) => {
      return cat.category === category;
    };
    setVideoListData(videoList.filter(categoryList));
  };

  useEffect(() => loadVideos(), []);
  return (
    <>
      <h2 className={styles.category_heading}>{category}</h2>
      <div className={styles.videolist_container}>
        {videoListData.map((item) => (
          <VideoCard
            key={item._id}
            thumbnail={item.thumbnail}
            title={item.title}
            creator={item.creator}
            logo={item.logo}
            videoId={item._id}
            addToHandler={addToHandler}
          />
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
