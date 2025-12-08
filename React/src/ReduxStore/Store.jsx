import colorReducer from "./colorReducer";
import countReducer from "./Reducer";
import {combineReducers, createStore} from 'redux'

const reducer = combineReducers({
    count: countReducer,
    color: colorReducer
})

let store = createStore(reducer)

export default store