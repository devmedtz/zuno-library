import axios from 'axios'

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


export const bookCheckoutAction = (bibnumber) => async (dispatch) => {
    try {
        dispatch({
            type: BOOK_CHECKOUT_REQUEST
        })

        const { data } = await axios.get(`/api/book/checkout/${bibnumber}`)

        dispatch({
            type: BOOK_CHECKOUT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOK_CHECKOUT_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }

}


export const listBooks = () => async (dispatch) => {
    try {
        dispatch({type: BOOK_LIST_REQUEST})

        const { data } =  await axios.get('/api/books/')

        dispatch({
            type: BOOK_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }

}


export const listBookDetails = (bibnum) => async (dispatch) => {
    try {
        dispatch({
            type: BOOK_DETAILS_REQUEST
        })

        const { data } = await axios.get(`/api/book/${bibnum}`)

        dispatch({
            type: BOOK_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOK_DETAILS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }

}