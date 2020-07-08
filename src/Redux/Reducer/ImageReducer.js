const initialState = {};

const imageReducer = (state=initialState,action) =>{
    switch(action.type){
        case "GET_IMAGES" :
            return {...action.payload}
        default:
            return {...state}
    }
}

export default imageReducer;