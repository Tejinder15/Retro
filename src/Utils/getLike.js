import axios from "axios";

const getLike = async (token,LikeDispatch) => {try {
      const response = await axios.get("/api/user/likes", {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        LikeDispatch({
          type: "GET_LIKE",
          payload: response.data.likes,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {getLike};