import {
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_LIST_FAIL,

    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    BOOK_DETAILS_FAIL,

    BOOK_CHECKOUT_REQUEST,
    BOOK_CHECKOUT_SUCCESS,
    BOOK_CHECKOUT_FAIL
} from '../actions/types'


export const  bookCheckoutReducer =  (state = {checkout: []}, action) => {
    switch(action.type) {
        case BOOK_CHECKOUT_REQUEST:
            return {
                loading:true, 
                checkout: []
            }

        case BOOK_CHECKOUT_SUCCESS:
            return {
                loading:false, 
                checkout:action.payload
            }

        case BOOK_CHECKOUT_FAIL:
            return {
                loading:false,
                error:action.payload
            }

        default:
            return state
    }
}


export const bookListReducer = (state = {books:[]}, action) => {
    const { type, payload } = action;
    switch (type) {
        case BOOK_LIST_REQUEST:
            return {
                loading: true,
                books: []
            };
        case BOOK_LIST_SUCCESS:
            return {
                books: payload,
                loading: false,
            };
        case BOOK_LIST_FAIL:
            return {
                loading: false,
                error:action.payload
            };
    
        default:
            return state;
    }
};


export const  bookDetailsReducer =  (state = {book: []}, action) => {
    switch(action.type) {
        case BOOK_DETAILS_REQUEST:
            return {
                loading:true, 
                book: []
            }

        case BOOK_DETAILS_SUCCESS:
            return {
                loading:false, 
                book:action.payload
            }

        case BOOK_DETAILS_FAIL:
            return {
                loading:false,
                error:action.payload
            }

        default:
            return state
    }
}