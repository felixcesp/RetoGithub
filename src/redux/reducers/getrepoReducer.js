import { getRepoTypes } from "../types/getrepo"


export const reducersGetRepo = (state = {}, action)=>{
    switch (action.type) {
        case getRepoTypes.search:
            return { 
                gitName: action.payload.gitUser,
            }
        default:
            return state
    }
}