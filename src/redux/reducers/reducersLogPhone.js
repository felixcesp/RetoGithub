import { typesLoginPhone } from "../types/types"

export const reducersLogPhone = (state = {}, action)=>{
    switch (action.type) {
        case typesLoginPhone.verificarPhone:
            return {
                email: action.payload.email,
                pass: action.payload.pass,
                nombre: action.payload.nombre,
                phone: action.payload.phone,
                uid: action.payload.uid,
            }
        default:
            return state
    }
}
