import axios from "axios";
import toast from "react-hot-toast";

const removeFromWatchLater = async (videoid,token,watchLaterDispatch) =>{
    try {
    const response = await axios.delete(`/api/user/watchlater/${videoid}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      watchLaterDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: response.data.watchlater });
      toast.success("Removed from watchlater");
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export {removeFromWatchLater};