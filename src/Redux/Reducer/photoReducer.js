const initialState = [];

const photoReducer = (state=initialState,action) =>{
    switch(action.type){
        case "GET_PHOTOS" :
            return [...action.payload]
        default:
            return [...state]
    }
}

export default photoReducer;