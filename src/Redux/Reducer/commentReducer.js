const initialState = [];

const commentReducer = (state=initialState,action) =>{
    switch(action.type){
        case "GET_COMMENTS" :
            return [...action.payload]
        default:
            return [...state]
    }
}

export default commentReducer;