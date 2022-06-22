import axios from "axios";
import toast from "react-hot-toast";
const addToLike = async (video,token,LikeDispatch) => {
    try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      LikeDispatch({ type: "ADD_TO_LIKE", payload: response.data.likes });
      toast.success("Liked the video");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error);
  }
};

export {addToLike};