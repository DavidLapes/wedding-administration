import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import "./index.css";
import App from "./App";
import configureStore, {history} from "./store";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import {logout} from "./services/actions/auth/authenticateUser";

const store = configureStore();

axios.interceptors.request.use(function (config) {
    let storageUser = JSON.parse(localStorage.getItem("user"))
    if (storageUser === null) {
        return config;
    }
    let token = storageUser.token;
    if (token === null) {
        return config;
    } else {
        config.headers.Authorization = "Bearer " + token;
        return config;
    }
});

axios.interceptors.response.use(function (response) {
    return response;
}, function(error) {
    if(error.response.status === 401) {
        store.dispatch(logout());
    }
    return Promise.reject(error);
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
