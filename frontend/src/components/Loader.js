import React from 'react'

// site preloader
import { Spinner } from 'react-bootstrap'

// Loading screen
function Loader() {

    return (
        <>    
        <div className="spinner bg-light">
            <Spinner animation="border" variant="primary" />
        </div>
            
        </>
    )
}

export default Loader