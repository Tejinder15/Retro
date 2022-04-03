import axios from "axios";

const removeFromPlaylist = async ({video,token,playlistDispatch,playlistId}) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}/${video._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: response.data.playlists,
      });
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error(error);
  }
};

export { removeFromPlaylist };