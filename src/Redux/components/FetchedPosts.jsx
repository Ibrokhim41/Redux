import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts.fetchPosts;
  });
  const loading = useSelector((state) => state.app.loading);

  return (
    <div className="w-full flex flex-col items-end">
      <button
        onClick={() => dispatch(fetchPosts())}
        className="py-1 px-3 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none rounded"
      >
        {loading ? "loading" : "download"}
      </button>

      {posts
        ? posts.map((post) => <Post post={post.name} key={post.id} />)
        : ""}
    </div>
  );
};

export default FetchedPosts;
