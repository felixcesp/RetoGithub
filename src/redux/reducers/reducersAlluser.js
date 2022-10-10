import { typesAllUser } from "../types/typesEdit"


export const reducersAlluser = (state = [], action)=>{
    switch (action.type) {
    case typesAllUser.allList:
    return{
      listUsers: action.payload
    }

    default:
        return state
}} 
