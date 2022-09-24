import { typesLoginPhone } from "../types/types"

export const reducersLogPhone = (state = {}, action)=>{
    switch (action.type) {
        case typesLoginPhone.verificarPhone:
            return {
                phone: action.payload.phone,
            }
        default:
            return state
    }
}
