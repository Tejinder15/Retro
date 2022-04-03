import { useParams } from "react-router-dom";
import { usePlaylist } from "../../Context";
const SinglePlaylist = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlist } = playlistState;
  const { playlistID } = useParams();

  const currentPlaylist = playlist.find((item) => item._id === playlistID);
  return (
    <div className="video_main_container">
      {currentPlaylist.videos.map((video) => (
        <div key={video._id}>
          <div video={video}>{video.title}</div>
        </div>
      ))}
    </div>
  );
};

export { SinglePlaylist };
