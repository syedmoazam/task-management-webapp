import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducerFunction from "@store/Reducers";

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducerFunction,

  composeEnhancers(applyMiddleware(thunk))
);

export default store;
