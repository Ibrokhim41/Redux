import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createPost, fetchImgs } from "../Redux/actions";

const Posts = ({ synPosts, createPost }) => {
  const [title, settitle] = useState("");
  const [currentImg, setCurrentImg] = useState("");
  const dispatch = useDispatch();
  const addPost = () => {
    createPost(title);
  };

  const imgs = useSelector((state) => state.posts.fetchedImgs);
  const loading = useSelector((state) => state.app.loading);
  const alert = useSelector((state) => state.app.alert);

  return (
    <div>
      <h1>Posts</h1>
      <input
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="w-full border border-gray-500"
        type="text"
      />
      <button onClick={addPost} className="w-full bg-gray-500 text-white">
        add
      </button>
      {synPosts.map((post, i) => {
        return <p key={i}>{post}</p>;
      })}

      <div className="w-full bt border-red-500">
        <button
          onClick={() => dispatch(fetchImgs())}
          className="w-full bg-red-400 text-white"
        >
          get image
        </button>
        {alert && <div className="text-red-700">Error ocured</div>}
        <div className="flex flex-wrap justify-center">
          {imgs.map((item) => {
            return (
              <img
                className="cursor-pointer w-96 h-96 object-cover"
                onClick={() => setCurrentImg(item.urls.full)}
                key={item.id}
                src={item.urls.small}
                alt="item.alt_description"
              />
            );
          })}
        </div>
      </div>
      <div className="w-full">
        {loading && "loading"}
        <img src={currentImg} alt={currentImg} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    synPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, { createPost })(Posts);
