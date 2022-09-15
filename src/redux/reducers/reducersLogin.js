import { typesLogin, typesUsuario } from "../types/types"

export const reducersLogin = (state = {isLogged: false}, action)=>{
    switch (action.type) {
        case typesLogin.verificarLogin:
            return {
                email: action.payload.email,
                pass: action.payload.pass,
                nombre: action.payload.nombre,
                isLogged: action.payload.isLogged,
            }
            
        case typesLogin.Logout:
            return {
                isLogged: false
            }
            case typesUsuario.register:
                return {
                    email: action.payload.email,
                    pass: action.payload.pass,
                    nombre: action.payload.nombre,
                   
                }
        default:
            return state
    }
}