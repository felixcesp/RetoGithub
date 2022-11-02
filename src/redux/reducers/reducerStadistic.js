import { typesUserStadistic } from "../types/typeUserStadistic"

export const reducersStadistic = (state =[], action) => {
    switch (action.type) {
        case typesUserStadistic.typeUserStadistic:
            return {
                stadisticRepo: action.payload,
            } 
            case typesUserStadistic.typeUserDinaStadistic:
                return {
                    dinamicStadistic: action.payload,
                }    
            

        default:
            return state
    }
}