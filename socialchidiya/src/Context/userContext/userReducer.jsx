export const userReducer = (state,{type,payload}) =>{
    switch(type){
        case"UPDATE_USER":
        return {...state,allUsers:payload}
        case"SET_AUTH_USER":
        return {...state,authUser:payload}
    }
}