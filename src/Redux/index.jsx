import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

const Sweet = () => {
  return (
    <div className="container m-auto">
      <div className="w-full">
        <PostForm />
      </div>
      <div className="flex justify-between">
        <div>
          <h1>Sinc Posts</h1>
          <Posts />
        </div>
        <div>
          <h1>Asnc Posts</h1>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
};

export default Sweet;
