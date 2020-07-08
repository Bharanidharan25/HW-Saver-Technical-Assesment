import axios from "axios";

export const getUser=(users)=>{
    return {
        type:"GET_USER",
        payload:users
    }
}

export const startGetUser = ()=>{
    return (dispatch =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            const users = response.data
            dispatch(getUser(users))
        })
        .catch(err => console.log(err))
    })
}
