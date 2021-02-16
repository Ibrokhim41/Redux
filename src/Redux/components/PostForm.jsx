import { useState } from "react";
import { connect } from "react-redux";
import { create_post, showAlert } from "../redux/actions";

const PostForm = (props) => {
  const [post, setPost] = useState({
    title: "",
    id: null,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!post.title.trim()) {
      return props.showAlert("Error");
    }
    props.create_post(post);
    setPost({
      title: "",
      id: null,
    });
  };

  const changeInputHandler = (event) => {
    const newPost = {
      title: event.target.value,
      id: Date.now().toString(),
    };
    setPost(newPost);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="bg-red-400 w-full text-center rounded py-4"></div>
      props.alert
      <div>
        <label className="w-full" htmlFor="title">
          Title Post
        </label>
        <input
          type="text"
          id="title"
          value={post.title}
          onChange={changeInputHandler}
          className="w-full border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-200"
        />
      </div>
      <button
        type="submit"
        className="py-1 px-3 bg-green-400 text-white hover:bg-green-500 focus:outline-none rounded"
      >
        add
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  create_post,
  showAlert,
};
const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
