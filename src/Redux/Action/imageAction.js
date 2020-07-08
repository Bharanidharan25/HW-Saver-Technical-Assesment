import axios from "axios";

export const getImages=(images)=>{
    return {
        type:"GET_IMAGES",
        payload:images
    }
}

export const startGetImages = (image,page)=>{
    return (dispatch =>{
        axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${image}&client_id=JlDCUbvlmvUlPco7QLnIQRf13P4lMLz2zy7ymY3dJgI`)
        .then(response=>{
            const images = response.data
            dispatch(getImages(images))
        })
        .catch(err => console.log(err))
    })
}
