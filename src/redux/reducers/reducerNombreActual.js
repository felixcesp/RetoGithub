import { typesCurrentEvalName } from "../types/types"


export const reducersNombreActual = (state = [], action)=>{
    switch (action.type) {
    case typesCurrentEvalName.keeepName:
    return {
      keepName: action.payload
    }

    default:
        return state
}} 
