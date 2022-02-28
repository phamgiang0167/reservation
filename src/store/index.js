import {combineReducers, createStore, applyMiddleware} from "redux"
import courseReducer from "./reducers/CourseReducer"
import slotsReducer from "./reducers/SlotsReducer";
import dateReducer from "./reducers/DateReducer";
import timeReducer from "./reducers/TimeReducer"
import seatReducer from "./reducers/SeatReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    courseReducer,
    slotsReducer,
    dateReducer,
    timeReducer,
    seatReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store