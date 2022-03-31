import VideoCard from "./VideoCard/VideoCard";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./VideoContainer.module.css";
const VideoContainer = ({ category }) => {
  const [videoListData, setVideoListData] = useState([]);

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
          />
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
