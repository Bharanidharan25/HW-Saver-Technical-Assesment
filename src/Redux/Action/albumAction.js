import axios from "axios";

export const getAlbum=(data)=>{
    return {
        type:"GET_ALBUM",
        payload:data
    }
}

export const startGetAlbum = ()=>{
    return (dispatch =>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then(response=>{
            const data = response.data
            dispatch(getAlbum(data))
        })
        .catch(err => console.log(err))
    })
}
