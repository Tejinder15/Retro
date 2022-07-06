import Navbar from "../../Components/Navbar/Navbar";
import PlaylistCard from "../../Components/PlaylistCard/PlaylistCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { usePlaylist } from "../../Context";
import { Toaster } from "react-hot-toast";

const Playlist = () => {
  const { playlistState } = usePlaylist();
  const { playlist } = playlistState;
  return (
    <div>
      <Navbar />
      <Toaster />
      {playlist?.map((item) => {
        return (
          <PlaylistCard
            title={item.title}
            key={item._id}
            playlistId={item._id}
          />
        );
      })}
      <Sidebar />
    </div>
  );
};

export { Playlist };
