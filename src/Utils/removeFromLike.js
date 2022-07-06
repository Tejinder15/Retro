import axios from "axios";
import toast from "react-hot-toast";

const removeFromLike = async (videoid,token,LikeDispatch) =>{
    try {
    const response = await axios.delete(`/api/user/likes/${videoid}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      LikeDispatch({ type: "REMOVE_FROM_LIKE", payload: response.data.likes });
      toast.success("Removed from Liked videos");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error);
  }
};

export {removeFromLike};