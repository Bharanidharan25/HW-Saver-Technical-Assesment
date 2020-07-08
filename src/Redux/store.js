import {createStore, combineReducers, applyMiddleware} from "redux";
import homeReducer from "./Reducer/homeReducer";
import postReducer from "./Reducer/postReducer";
import userReducer from "./Reducer/userReducer";
import commentReducer from "./Reducer/commentReducer";
import albumReducer from "./Reducer/albumReducer";
import photoReducer from "./Reducer/photoReducer";
import imageReducer from "./Reducer/ImageReducer"
import thunk from "redux-thunk";

const configureStore = () =>{
    const store = createStore(combineReducers({
        home: homeReducer,
        posts:postReducer,
        user:userReducer,
        comments:commentReducer,
        album:albumReducer,
        photos:photoReducer,
        images:imageReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore;