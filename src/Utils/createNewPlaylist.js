import axios from "axios";

const createNewPlaylist = async (requestBody,token,playlistDispatch) => {
  try {
    const response = await axios.post(`/api/user/playlists`, requestBody, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 201) {
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

export { createNewPlaylist };