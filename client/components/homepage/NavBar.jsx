import React from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
const NavBar = props => {
    const router = useRouter();
    return (
        <>
            <div className="topbar"></div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbarwrap"> 
                <Container>
                    <Navbar.Brand onClick={(e)=>router.push("/")} className="brandtitle">StellarMe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={(e)=>e.preventDefault()}>Stellar Who?</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={(e)=>e.preventDefault()}>Get started</Nav.Link>
                            <Nav.Link onClick={(e)=>e.preventDefault()} className="navbaractions">Login</Nav.Link>
                            <Nav.Link onClick={(e)=>e.preventDefault()} className="navbaractions">action #1</Nav.Link>
                            <Nav.Link onClick={(e)=>e.preventDefault()} className="navbaractions">action #2</Nav.Link>
                            <NavDropdown title="Menu" id="collapsible-nav-dropdown" className="navbardropdown">
                                <NavDropdown.Item onClick={(e)=>e.preventDefault()}>Login</NavDropdown.Item>
                                <NavDropdown.Item onClick={(e)=>e.preventDefault()}>Register</NavDropdown.Item>
                                <NavDropdown.Item onClick={(e)=>e.preventDefault()}>action #1</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={(e)=>router.push("/dashboard")}>Dashboard</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;