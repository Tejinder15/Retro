import axios from "axios";
import toast from "react-hot-toast";

const deletePlaylist = async ({token,playlistDispatch,playlistId,}) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      playlistDispatch({
        type: "UPDATE_PLAYLIST",
        payload: response.data.playlists,
      });
      toast.success("Playlist Deleted");
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    toast.error(error);
  }
};

export { deletePlaylist };