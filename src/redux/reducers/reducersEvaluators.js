import { typesEvaluadores } from "../types/types"

export const reducersEvaluators = (state = [], action)=>{
    switch (action.type) {
    case typesEvaluadores.verEvaluadores:
    return{
      verEvaluators: action.payload
    }

    default:
        return state
}} 
