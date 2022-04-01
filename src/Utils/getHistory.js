import axios from "axios";

const getHistory = async (token,HistoryDispatch) => {try {
      const response = await axios.get("/api/user/history", {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        HistoryDispatch({
          type: "GET_HISTORY",
          payload: response.data.history,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {getHistory};