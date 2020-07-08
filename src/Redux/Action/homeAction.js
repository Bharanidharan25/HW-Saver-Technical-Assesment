import axios from "axios";

export const getHomeData=(users)=>{
    return {
        type:"SET_HOME_PAGE",
        payload:users
    }
}

export const startGetHomeData = ()=>{
    return (dispatch =>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=ddpB3bMoWYosWICbb5HaOIJpJVd3bI3L1YJSRaJz")
        .then(response=>{
            const users = response.data
            dispatch(getHomeData(users))
        })
        .catch(err => console.log(err))
    })
}
