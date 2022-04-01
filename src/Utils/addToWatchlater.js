import axios from "axios";
const addToWatchlater = async (video,token,watchLaterDispatch) => {
    try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      watchLaterDispatch({ type: "ADD_TO_WATCHLATER", payload: response.data.watchlater });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export {addToWatchlater};