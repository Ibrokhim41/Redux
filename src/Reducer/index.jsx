import axios from "axios";

const { useReducer, useEffect } = require("react");

const Example = () => {
  const initialState = {
    isLoading: false,
    error: null,
    data: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "getArticleStart":
        return {
          ...state,
          isLoading: true,
        };
      case "getArticleSuccess":
        // console.log(actoin.payload);
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case "getArticleFailure":
        return {
          ...state,
          isLoading: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "getArticleStart" });
    axios
      .get("https://course-api.com/react-tours-project")
      .then((res) => {
        dispatch({ type: "getArticleSuccess", payload: res.data });
      })
      .catch(() => {
        dispatch({ type: "getArticleFailure" });
      });
  }, []);

  useEffect(() => {
    console.log("state: " + state.data);
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => dispatch({ type: "getArticleSuccess" })}>
        Get Acti
      </button>
      {state.isLoading && <div>Loading</div>}
    </div>
  );
};

export default Example;
