import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "app/reducers";
import createSagaMiddleware from "redux-saga";
// import rootSaga from "app/sagas";

const sagaMiddleware = createSagaMiddleware();
export function configureStore() {
  let middleware = applyMiddleware(sagaMiddleware);

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, middleware);

  //   sagaMiddleware.run(rootSaga);

  // if (module.hot) {
  //   module.hot.accept("../reducers", () => {
  //     const nextReducer = require("../reducers");
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
