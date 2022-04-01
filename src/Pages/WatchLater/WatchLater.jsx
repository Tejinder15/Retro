import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useWatchLater } from "../../Context/WatchLaterContext/watchlater-context";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { getWatchLater } from "../../Utils/getWatchLater";
import { removeFromWatchLater } from "../../Utils/removeFromWatchLater";
import { useEffect } from "react";
import WatchLaterCard from "../../Components/WatchLaterCard/WatchLaterCard";

const WatchLater = () => {
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { authState } = useAuth();
  const { token } = authState;
  const { watchlater } = watchLaterState;

  const removeHandler = async (videoid) => {
    removeFromWatchLater(videoid, token, watchLaterDispatch);
  };

  useEffect(() => getWatchLater(token, watchLaterDispatch), []);
  return (
    <div>
      <Navbar />
      <div className="video_main_container">
        <h1 className="page_title">Watch Later</h1>
        <div className="liked_container">
          {watchlater.length !== 0 ? (
            watchlater.map((item) => (
              <WatchLaterCard
                key={item._id}
                image={item.thumbnail}
                title={item.title}
                creator={item.creator}
                vidId={item._id}
                removefromwl={removeHandler}
              />
            ))
          ) : (
            <h2 className="page_title">No Videos in Watch Later😥.</h2>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export { WatchLater };
