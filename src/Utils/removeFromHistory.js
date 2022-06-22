import axios from "axios";
import toast from "react-hot-toast";;

const removeFromHistory = async (videoid,token,HistoryDispatch) =>{
    try {
    const response = await axios.delete(`/api/user/history/${videoid}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      HistoryDispatch({ type: "REMOVE_FROM_HISTORY", payload: response.data.history });
      toast.success("Removed From History");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error);
  }
};

export {removeFromHistory};