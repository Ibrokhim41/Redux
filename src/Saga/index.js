import { applyMiddleware, compose, createStore } from "redux";
import createSaga from "redux-saga";
import { Provider } from "react-redux";
import App from "../../src/App";
import { rootReducer } from "./redux/rootReducer";

const saga = createSaga();
const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run();

export function SagaApp() {
  <Provider store={store}>
    <App />
  </Provider>;
}
