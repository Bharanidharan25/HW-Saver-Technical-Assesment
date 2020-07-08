const initialState = {};

const homeReducer = (state=initialState,action) =>{
    switch(action.type){
        case "SET_HOME_PAGE" :
            return {...state, ...action.payload}
        default:
            return {...state}
    }
}

export default homeReducer;