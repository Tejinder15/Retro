import axios from "axios";
const addToHistory = async (video,token,HistoryDispatch) => {
    try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      HistoryDispatch({ type: "ADD_TO_HISTORY", payload: response.data.history });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export {addToHistory};