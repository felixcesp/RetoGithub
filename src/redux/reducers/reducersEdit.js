import { typesUsergit } from "../types/typesEdit"


const initialState = {
    showUsers: []
}

export const reducersUsergit = (state = initialState, action) => {
    switch (action.type) {
        case typesUsergit.add:
            return {
                showUsers: [action.payload]
            }

        case typesUsergit.list:
            return {
                showUsers: [...action.payload]
            }
            case typesUsergit.listEva:
                return {
                    showEva: [...action.payload]
                }

        case typesUsergit.delete:
            return {
                showUsers: state.showUsers.filter(p => p.idcard !== action.payload)
            }
        case typesUsergit.edit:
            return {
                ...state
            }
        case typesUsergit.search:
            return {
                showUsers: action.payload
            }
        default:
            return state
    }
}