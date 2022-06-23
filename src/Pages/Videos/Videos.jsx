import { v4 as uuidv4 } from "uuid";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VideoContainer from "../../Components/VideoCC/VideoContainer";
const Videos = () => {
  return (
    <div>
      <Navbar />
      <div className="video_main_container">
        <VideoContainer category={"Comedy"} key={uuidv4()} />
        <VideoContainer category={"Gaming"} key={uuidv4()} />
        <VideoContainer category={"Podcast"} key={uuidv4()} />
        <VideoContainer category={"Sports"} key={uuidv4()} />
      </div>
      <Sidebar />
    </div>
  );
};

export { Videos };
