import axios from "axios";

export const getPosts=(users)=>{
    return {
        type:"GET_POSTS",
        payload:users
    }
}

export const startGetPosts = ()=>{
    return (dispatch =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            const users = response.data
            dispatch(getPosts(users))
        })
        .catch(err => console.log(err))
    })
}
