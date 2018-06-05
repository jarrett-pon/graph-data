import { applyMiddleware, compose, createStore } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import rootReducer from "../reducers";

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(apiMiddleware)));
  return store;
}
