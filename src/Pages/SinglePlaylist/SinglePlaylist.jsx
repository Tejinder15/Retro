import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import PlaylistVideoCard from "../../Components/PlaylistVideoCard/PlaylistVideoCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useAuth, usePlaylist } from "../../Context";
import { removeFromPlaylist } from "../../Utils";
import { Toaster } from "react-hot-toast";
const SinglePlaylist = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlist } = playlistState;
  const { playlistID } = useParams();
  const { authState } = useAuth();
  const { token } = authState;

  const currentPlaylist = playlist.find((item) => item._id === playlistID);

  const removeHandler = (vid) => {
    removeFromPlaylist(vid, token, playlistDispatch, playlistID);
  };
  return (
    <>
      <Navbar />
      <Toaster />
      <div className="video_main_container">
        {currentPlaylist.videos.map((video) => (
          <PlaylistVideoCard
            key={video._id}
            vid={video}
            removeHandler={removeHandler}
          />
        ))}
      </div>
      <Sidebar />
    </>
  );
};

export { SinglePlaylist };
