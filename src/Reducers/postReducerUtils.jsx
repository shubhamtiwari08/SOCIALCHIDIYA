export const getTrendingPost = (post,sort) =>{
    if(sort === "trending"){
    return post.filter(post => post.likes.likeCount !== 0).sort((a,b)=> b.likes.likeCount - a.likes.likeCount )
    }
    if(sort === "latest"){
        return post.sort( (a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
    return post
}


export const exploreFilters = (post,type) =>{
    switch(type){
        case "all":
            return post
        default:
            return post.filter(post => post.category === type )
    }
        // if(type="all"){
        //     console.log("not workinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnng")
        //     return post
        // }else{
        //     console.log("working")
            
        // }
}