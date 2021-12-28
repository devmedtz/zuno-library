import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Badge } from 'react-bootstrap'

import { bookCheckoutAction } from '../store/actions/book'
import Loader from './Loader'
import Message from './Message';

function CheckoutTrends({ bibnumber }) {

    const dispatch = useDispatch()

    const bookCheckouts = useSelector(state => state.bookCheckout)

    const { loading, error, checkout } = bookCheckouts

    useEffect(() => {
        dispatch(bookCheckoutAction(bibnumber))
    }, [dispatch, bibnumber])

    return (
        <div>
            <h6>Checkout Trends</h6>

            {
               loading ? <Loader />
               : error ? <Message variant="danger">{error}</Message>
               : 
                <Row>
                    {checkout.map((c) => (
                        <p key={c.bibnumber}>
                            
                            <Badge bg="primary">{c.checkoutdatetime}</Badge>
                        </p>
                    ))}
                </Row>
               
            }
            
       
        </div>
    )
}

export default CheckoutTrends
