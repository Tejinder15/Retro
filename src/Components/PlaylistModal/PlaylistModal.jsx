import { v4 as uuid } from "uuid";
import { useState } from "react";
import styles from "./PlaylistModal.module.css";
import { usePlaylist, useAuth } from "../../Context";
import {
  addToPlaylist,
  createNewPlaylist,
  removeFromPlaylist,
} from "../../Utils";

export const PlaylistModal = ({ visibility, toggleVisibility, video }) => {
  const { authState } = useAuth();
  const { token } = authState;
  const [newPlayListName, setNewPlayListName] = useState("");
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlist } = playlistState;
  const [newPlaylistData, setNewPlaylistData] = useState({
    title: "",
    descripton: "",
  });

  const handleInput = (e) => {
    setNewPlaylistData({ ...newPlaylistData, title: e.target.value });
  };

  const handleCreateNewPlayList = () => {
    if (
      newPlaylistData.title.trim() !== "" &&
      playlist.findIndex((item) => item.title === newPlaylistData.title) === -1
    ) {
      const requestBody = { playlist: newPlaylistData };
      createNewPlaylist(requestBody, token, playlistDispatch);
      setNewPlaylistData({ title: "", descripton: "" });
    }
  };

  const handleNewPlaylistDataChange = (e) => {
    setNewPlaylistData((data) => ({ ...data, title: e.target.value }));
  };

  const handlePlaylistCheckboxClick = (e) => {
    if (e.target.checked) {
      addToPlaylist({
        token,
        video: video,
        playlistId: e.target.id,
        playlistDispatch,
      });
    } else {
      removeFromPlaylist({
        token,
        video: video,
        playlistId: e.target.id,
        playlistDispatch,
      });
    }
  };

  return (
    <div
      className={styles.addToPlayList}
      style={{ display: visibility ? "" : "none" }}
    >
      <div className={styles.addToPlayList__modal}>
        <div className={styles.addToPlayList__modalHeading}>
          <span className="page_title">Save to..</span>
          <span
            className={`material-icons-round ${styles.close}`}
            onClick={toggleVisibility}
          >
            clear
          </span>
        </div>
        <hr />
        <div className={styles.addToPlayList__modalList}>
          {playlist.length > 0
            ? playlist.map((item) => (
                <div key={item._id} className="input-wrapper checkbox">
                  <input
                    type="checkbox"
                    id={item._id}
                    onChange={handlePlaylistCheckboxClick}
                  />
                  <label htmlFor={item._id} className="m-xxs m-tb0">
                    {item.title}
                  </label>
                </div>
              ))
            : null}
        </div>
        <div className={styles.addToPlaylist__create}>
          <input
            type="text"
            placeholder="Enter playlist name..."
            className={`${styles.addToPlaylist__input}`}
            onChange={handleInput}
            value={newPlaylistData.title}
          />
          <div
            className={`btn btn-primary styles.create_playlist`}
            onClick={handleCreateNewPlayList}
          >
            CREATE
          </div>
        </div>
      </div>
    </div>
  );
};
