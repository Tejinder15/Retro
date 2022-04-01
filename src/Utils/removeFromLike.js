import axios from "axios";

const removeFromLike = async (videoid,token,LikeDispatch) =>{
    try {
    const response = await axios.delete(`/api/user/likes/${videoid}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      LikeDispatch({ type: "REMOVE_FROM_LIKE", payload: response.data.likes });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export {removeFromLike};