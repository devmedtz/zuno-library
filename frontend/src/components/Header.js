import { React } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function Header() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" expanded={false} className="shadow-sm">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <strong>Zuno Library</strong>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about-us">
                                <Nav.Link>About Us</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
