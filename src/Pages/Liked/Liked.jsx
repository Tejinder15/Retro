import LikeCard from "../../Components/LikeCard/LikeCard";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useEffect } from "react";
import { useLike, useAuth } from "../../Context";
import { getLike, removeFromLike } from "../../Utils/";
import { Toaster } from "react-hot-toast";

const Liked = () => {
  const { LikeState, LikeDispatch } = useLike();
  const { authState } = useAuth();
  const { token } = authState;
  const { like } = LikeState;

  const removeLikeHandler = async (videoid) => {
    removeFromLike(videoid, token, LikeDispatch);
  };

  useEffect(() => getLike(token, LikeDispatch), []);
  return (
    <div>
      <Navbar />
      <div className="video_main_container">
        <h2 className="page_title">Liked</h2>
        <Toaster />
        <div className="liked_container">
          {like.length !== 0 ? (
            like.map((item) => (
              <LikeCard
                key={item._id}
                image={item.thumbnail}
                title={item.title}
                creator={item.creator}
                vidId={item._id}
                removefromlike={removeLikeHandler}
              />
            ))
          ) : (
            <h2 className="page_title">No Videos Liked😥.</h2>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export { Liked };
