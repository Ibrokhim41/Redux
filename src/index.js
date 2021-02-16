import React from "react";
import ReactDOM from "react-dom";
// import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
// import { compose, createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./Redux/redux/rootReducer";
// import { spamWords } from "./Redux/redux/middlewear";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./TestRedux/Redux/rootReducer";
import thunk from "redux-thunk";
import createSaga from "redux-saga";
import { sagaWatcher } from "./TestRedux/Redux/sagas";
// import { spamWords } from "./TestRedux/Redux/middleware";

const saga = createSaga();
const store = createStore(rootReducer, compose(applyMiddleware(thunk, saga)));

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// const app = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

ReactDOM.render(app, document.getElementById("root"));
