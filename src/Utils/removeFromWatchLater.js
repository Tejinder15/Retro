import axios from "axios";

const removeFromWatchLater = async (videoid,token,watchLaterDispatch) =>{
    try {
    const response = await axios.delete(`/api/user/watchlater/${videoid}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      watchLaterDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: response.data.watchlater });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export {removeFromWatchLater};