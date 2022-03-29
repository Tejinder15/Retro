import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VideoContainer from "../../Components/VideoCC/VideoContainer";
const Videos = () => {
  return (
    <>
      <Navbar />
      <div className="video_main_container">
        <VideoContainer category={"Comedy"} />
        <VideoContainer category={"Gaming"} />
        <VideoContainer category={"Podcast"} />
        <VideoContainer category={"Sports"} />
      </div>
      <Sidebar />
    </>
  );
};

export default Videos;
