const initialPlaylistState = { playlist: [] };

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_FROM_PLAYLIST":
      return {
        playlist: state.playlist.map((item) =>
          item.title === action.payload.title ? action.payload : item
        ),
      };
    case "ADD_TO_PLAYLIST":
      return {
        playlist: state.playlist.map((item) =>
          item.title === action.payload.title ? action.payload : item
        ),
      };
    case "UPDATE_PLAYLIST":
      return { playlist: action.payload };
    case "RESET":
      return initialPlaylistState;
    default:
      return state;
  }
};

export { playlistReducer, initialPlaylistState };