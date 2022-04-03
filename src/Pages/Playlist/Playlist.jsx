import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import PlaylistCard from "../../Components/PlaylistCard/PlaylistCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { usePlaylist } from "../../Context";

const Playlist = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlist } = playlistState;
  return (
    <div>
      <Navbar />
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
