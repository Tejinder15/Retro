import axios from "axios";

const deleteAllHistory = async (token,HistoryDispatch) => {
    try {
    const response = await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      HistoryDispatch({ type: "CLEAR_HISTORY", payload: response.data.history });
      toast.success("Cleared History");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error);
  }
}

export {deleteAllHistory};