import axios from "axios";

const removeFromHistory = async (videoid,token,HistoryDispatch) =>{
    try {
    const response = await axios.delete(`/api/user/history/${videoid}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      HistoryDispatch({ type: "REMOVE_FROM_HISTORY", payload: response.data.history });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export {removeFromHistory};