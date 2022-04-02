import axios from "axios";
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
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export {addToLike};