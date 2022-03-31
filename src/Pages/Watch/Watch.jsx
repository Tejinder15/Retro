import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./Watch.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState([]);
  const v = searchParams.get("v");

  const loadVideoData = async () => {
    const response = await axios.get(`/api/video/${v}`);
    setVideoData(response.data.video);
  };

  useEffect(() => loadVideoData(), []);
  return (
    <div>
      <Navbar />
      <div className="video_main_container">
        <div className={styles.watch_video_container}>
          <iframe
            src={`https://www.youtube.com/embed/${v}?autoplay=1&mute=1`}
            frameBorder={0}
            className={styles.watch_video}
          ></iframe>
          <div className={styles.watch_video_footer}>
            <img
              src={videoData.logo}
              alt="logo"
              className={styles.channel_logo}
            />
            <div>
              <div className={styles.watch_video_title}>{videoData.title}</div>
              <div className={styles.watch_video_creator}>
                {videoData.creator}
              </div>
            </div>
            <div className={styles.watch_video_actions}>
              <span className="material-icons-round">thumb_up</span>
              <span className="material-icons-round">playlist_add</span>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export { Watch };