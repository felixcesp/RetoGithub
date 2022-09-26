import { typesEstadoPhone } from "../types/types"

export const reducerAuthPhone = (state = {}, action)=>{
    switch (action.type) {
        case typesEstadoPhone.estadoPhone:
            return {
      
                phoneState: action.payload.authstate,
            }
        default:
            return state
    }
}
