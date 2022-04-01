import axios from "axios";

const getWatchLater = async (token,watchLaterDispatch) => {try {
      const response = await axios.get("/api/user/watchlater", {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        watchLaterDispatch({
          type: "GET_WATCHLATER",
          payload: response.data.watchlater,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {getWatchLater};