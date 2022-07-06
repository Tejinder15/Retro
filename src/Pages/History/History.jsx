import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { deleteAllHistory, getHistory, removeFromHistory } from "../../Utils";
import { useEffect } from "react";
import HistoryCard from "../../Components/HistoryCard/HistoryCard";
import { useHistory, useAuth } from "../../Context";
import { Toaster } from "react-hot-toast";

const History = () => {
  const { HistoryState, HistoryDispatch } = useHistory();
  const { authState } = useAuth();
  const { token } = authState;
  const { history } = HistoryState;

  const removeHandler = async (videoid) => {
    removeFromHistory(videoid, token, HistoryDispatch);
  };

  const clearHistory = () => {
    deleteAllHistory(token, HistoryDispatch);
  };

  useEffect(() => getHistory(token, HistoryDispatch), []);
  return (
    <div>
      <Navbar />
      <Toaster />
      <div className="video_main_container">
        <h1 className="page_title">History</h1>
        <button className="clear_history" onClick={clearHistory}>
          Clear History
        </button>
        <div className="liked_container">
          {history.length !== 0 ? (
            history.map((item) => (
              <HistoryCard
                key={item._id}
                thumbnail={item.thumbnail}
                title={item.title}
                creator={item.creator}
                logo={item.logo}
                videoId={item._id}
                removeHistory={removeHandler}
              />
            ))
          ) : (
            <h2 className="page_title">History is Empty😥.</h2>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export { History };
