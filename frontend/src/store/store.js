import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Site Reducers
import { bookListReducer, bookDetailsReducer, bookCheckoutReducer } from './reducers/book'


const reducer = combineReducers({
    bookList: bookListReducer,
    bookDetails : bookDetailsReducer,
    bookCheckout: bookCheckoutReducer
}) 

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store