import axios from "axios";

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
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error(error);
  }
};

export { deletePlaylist };