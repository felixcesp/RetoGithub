import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducersGetRepo } from "../reducers/getrepoReducer";
import { reducersPlantas } from "../reducers/reducersEdit";


import { reducersLogin } from "../reducers/reducersLogin";
import { reducersLogPhone } from "../reducers/reducersLogPhone";
import { saveReducer } from "../reducers/saveReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers(
    {
        login: reducersLogin,
        logPhone:reducersLogPhone,
        saveUser:saveReducer,
        gitUser:reducersGetRepo,
        newGitUser: reducersPlantas,
    
    }
)

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    
    
);