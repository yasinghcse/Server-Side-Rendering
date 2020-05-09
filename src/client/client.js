// import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes"
import {createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "./reducers";
import {renderRoutes} from "react-router-config";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "/api"
});

const store = createStore(reducers, window.__INITIAL_REACT_STATE__ , applyMiddleware(reduxThunk.withExtraArgument(axiosInstance)));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector("#root"));