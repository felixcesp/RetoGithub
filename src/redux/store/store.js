import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducersGetRepo } from "../reducers/getrepoReducer";
import { reducerAuthPhone } from "../reducers/reducerAuthPhone";
import { reducersUsergit } from "../reducers/reducersEdit";
import { reducersEvaluators } from "../reducers/reducersEvaluators";

import { reducersLogin } from "../reducers/reducersLogin";
import { reducersLogPhone} from "../reducers/reducersLogPhone";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers(
    {
        login: reducersLogin,
        logPhone:reducersLogPhone,
        gitUser:reducersGetRepo,
        newGitUser: reducersUsergit,
        statePhone:reducerAuthPhone,
        allEvaluators:reducersEvaluators,
       
     
    
    }
)

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    
    
);