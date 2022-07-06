import axios from "axios";
import toast from "react-hot-toast";
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
      toast.success("Added to WatchLater");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response);
  }
};

export {addToWatchlater};