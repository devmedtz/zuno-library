import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Row, Col } from 'react-bootstrap'

import { listBooks } from '../store/actions/book'

import Loader from '../components/Loader'
import Message from '../components/Message';

import Book from '../components/Book';

function HomeScreen() {

    const dispatch = useDispatch()

    const bookList = useSelector(state => state.bookList)

    const { books, error, loading } = bookList

    useEffect(() => {
        dispatch(listBooks())
    }, [dispatch])

    return (
        <>
            <Container className="margin-top-40">
                <h2>Books</h2>
                { loading ? <Loader />
                    : error ? <Message variant="danger">{error}</Message>
                    :
                    <Row>
                        {books.map((book) =>(
                            <Col key={book.bibnum} sm={12}>
                                <Book props={book} />
                            </Col>
                        ))}
                    </Row>
                }
            </Container>
        </>
    )
}

export default HomeScreen
