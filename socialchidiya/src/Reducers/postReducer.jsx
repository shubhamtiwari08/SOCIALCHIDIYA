export const postReducer = (state,{type,payload}) =>{
     switch(type){
        case"SET_POST":
        return {...state,posts:payload}
        case"SORTING":
        return {...state,sort:payload}
        case"ADD_BOOKMARK":
        return {...state,bookmarked:payload}
        case"EXPLORE_FILTER":
        return {...state,exploreSort:payload}
     }
}