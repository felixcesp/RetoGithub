import { typesSearch } from "../types/types"

const initialState = {
    finalGitGotten: []
}

export const reducersSearchgit = (state = initialState, action) => {
    switch (action.type) {
    

        case typesSearch.evaluadorUsers:
            return {
                finalGitGotten: [...action.payload]
            }
       
        default:
            return state
    }
}