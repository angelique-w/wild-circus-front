import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import spectaclesReducer from "./reducers/spectaclesReducer";
import thunk from "redux-thunk";

// const store = createStore(
//     combineReducers({ authReducer, userReducer }),
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ &&
//             window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

const store = createStore(
    spectaclesReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
