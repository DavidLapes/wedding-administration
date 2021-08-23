import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import reducers from "./services/reducers/index";

export const history = createBrowserHistory();

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        reducers(history),
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,
                routerMiddleware(history)
            )
        )
    )
}
