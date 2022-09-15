

import { Navigate } from "react-router-dom";

export const PrivatePath= ({auth, children})=>{
    
if (auth){
 
    return     children ;
}else{
    return < Navigate to = {'/pag1'}/>
}

}

export const PublicPath= ({auth, children})=>{
   
    if (!auth){
        return     children ;
    }else{
        return < Navigate to = {'/saveuser'}/>
    }
    
    }