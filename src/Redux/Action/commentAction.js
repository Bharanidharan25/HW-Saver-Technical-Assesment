import axios from "axios";

export const getComments=(comments)=>{
    return {
        type:"GET_COMMENTS",
        payload:comments
    }
}

export const startGetComments = (postId)=>{
    return (dispatch =>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response=>{
            const comments = response.data
            dispatch(getComments(comments))
        })
        .catch(err => console.log(err))
    })
}
