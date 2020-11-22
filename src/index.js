import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {AuthorizationStatus} from "./const";
import thunk from "redux-thunk";
import {fetchMovieList, fetchPromoMovie, checkAuth} from "./store/api-action";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchMovieList()),
  store.dispatch(fetchPromoMovie()),
  store.dispatch(checkAuth()),
])
.then(() => {
  ReactDom.render(
      <Provider store = {store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
})
.catch(() => {});

export {store};
