import axios from "axios";

const addToPlaylist = async ({video,token,playlistDispatch,playlistId}) => {
  try {
    const response = await axios.post(`/api/user/playlists/${playlistId}`, {video}, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 201) {
      playlistDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: response.data.playlist,
      });
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error(error);
  }
};

export { addToPlaylist };