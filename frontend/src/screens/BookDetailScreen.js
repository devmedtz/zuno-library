import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Row, Col, Card } from 'react-bootstrap'
import bookCoverImage from '../assets/images/book-cover.jpg'

import {listBookDetails} from '../store/actions/book'
import Loader from '../components/Loader'
import Message from '../components/Message'
import CheckoutTrends from '../components/CheckoutTrends';

function BookDetailScreen({ match, history }) {

    const dispatch = useDispatch()

    const bookDetails = useSelector(state => state.bookDetails)

    const { loading, error, book } = bookDetails

    useEffect(() => {
        dispatch(listBookDetails(match.params.bibnum))
    }, [dispatch, match])

    return (
        <>
            <Container className="margin-top-40">
                {
                    loading ?
                    <Loader />
                    : error 
                    ? <Message variant="danger">{error}</Message>
                    :
                    (
                        <Row>
                            <Col lg={7}>
                                <Card className="border-0 shadow-sm">
                                    <Card.Img variant="top" src={bookCoverImage} />
                                    <Card.Title className="my-3 text-primary">
                                        <strong>{book.title}</strong>
                                    </Card.Title>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={5} className="">
                                <Card className="shadow-lg">
                                    <Card.Body>
                                        <p><strong>Author:</strong> {book.author}</p>
                                        <p><strong>Publisher:</strong> {book.publisher}</p>
                                        <p><strong>ISBN:</strong> {book.isbn}</p>
                                        <p><strong>Publication Year:</strong> {book.publicationyear}</p>
                                        <p><strong>Subjects:</strong> {book.subjects}</p>
                                    </Card.Body>
                                </Card>

                                <Card className="my-3">
                                    <Card.Body>
                                       <CheckoutTrends bibnumber={book.bibnum} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                }
                
            </Container>
        </>
    )
}

export default BookDetailScreen
