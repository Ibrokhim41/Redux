import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ syncPosts }) => {
  console.log(syncPosts);

  return (
    <div>
      {syncPosts.length ? (
        syncPosts.map((post) => {
          return <Post post={post.title} key={post.id} />;
        })
      ) : (
        <div className="w-full">
          <h5 className="text-red-700">No Posts</h5>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
