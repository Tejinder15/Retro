import axios from "axios";
import toast from "react-hot-toast";

const removeFromPlaylist = async (videoid,token,playlistDispatch,playlistId) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoid}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: response.data.playlist,
      });
      toast.success("Removed from Playlist");
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    toast.error(error);
  }
};

export { removeFromPlaylist };