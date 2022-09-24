import { getRepoTypes } from "../types/getrepo"

export const actionRepoSync = (gitUser)=>{
    return {
        type: getRepoTypes.search,
        payload:{
            gitUser,
        }
    }
    }