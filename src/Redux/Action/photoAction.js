import axios from "axios";

export const getPhotos=(photos)=>{
    return {
        type:"GET_PHOTOS",
        payload:photos
    }
}

export const startGetPhotos = (id)=>{
    return (dispatch =>{
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(response=>{
            const photos = response.data
            dispatch(getPhotos(photos))
        })
        .catch(err => console.log(err))
    })
}
