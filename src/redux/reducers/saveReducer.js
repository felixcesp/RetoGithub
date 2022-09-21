/*
import { saveUserTypes } from "../types/storeUser";



export const saveReducer = ( state = [], action ) => {
    switch (action.type) {
        case saveUserTypes.add:
            return [...state, action.payload ];

        case saveUserTypes.read:
            return action.payload

        case saveUserTypes.delete:
            return state.filter( userdata => userdata.email !== action.payload )

        case saveUserTypes.edit:
            const stateNew = state.filter( date => date.email !== action.payload.email )
            return [...stateNew, action.payload]
            
        default:
            return state;
    }
}*/