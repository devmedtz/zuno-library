import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Book({props}) {
    return (
        <Card className="my-3 p-2 rounded shadow-sm">
            <Card.Body>
                <Link to={`/book/${props.bibnum}`}>
                    <strong>{props.title}</strong>
                </Link>   
            </Card.Body>
        </Card>
    )
}

export default Book
