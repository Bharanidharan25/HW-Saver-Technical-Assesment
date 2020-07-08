const initialState = [];

const albumReducer = (state=initialState,action) =>{
    switch(action.type){
        case "GET_ALBUM" :
            return [...state, ...action.payload]
        default:
            return [...state]
    }
}

export default albumReducer;