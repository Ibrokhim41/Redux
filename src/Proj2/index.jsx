import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { connect } from "react-redux";

const Post = ({ posts }) => {
  return <div>{posts}</div>;
};

const Proj2 = ({ sPosts }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = "https://course-api.com/react-tours-project";

  const notInteresred = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Tours items={data} notInterested={notInteresred} />
      )}
      <Post posts={sPosts} />
    </>
  );
};

const props = (state) => {
  return {
    sPosts: state.posts.posts,
  };
};

export default connect(props, null)(Proj2);
