import LikeCard from "../../Components/LikeCard/LikeCard";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const WatchLater = () => {
  return (
    <div>
      <Navbar />
      <div className="liked_container">
        <LikeCard />
      </div>
      <Sidebar />
    </div>
  );
};

export { WatchLater };
