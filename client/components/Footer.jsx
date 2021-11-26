import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
const Footer = props => {
    const router = useRouter();
    return (
        <>
        <Container fluid className="footerwrap">
            <Row lg={'auto'} className="d-flex
            justify-content-between
            align-items-center
            ">
                <Col lg={3} className="d-flex align-items-center justify-content-center footerbrand" onClick={()=>{router.push('/')}}>
                    <div className="footerlogo "></div>
                    <h1>StellarMe</h1>
                </Col>
                <Col lg={'true'} className="d-flex flex-column align-items-center">
                    <h6>Heading 1</h6>
                    <Link onClick={(e)=>e.preventDefault(e)} href="/">link 1</Link>
                    <Link onClick={(e)=>e.preventDefault(e)} href="/">link 2</Link>
                </Col>
                <Col lg={'true'} className="d-flex flex-column align-items-center">
                    <h6>heading 2</h6>
                    <Link onClick={(e)=>e.preventDefault(e)} href="/">link 1</Link>
                    <Link onClick={(e)=>e.preventDefault(e)} href="/">link 2</Link>
                </Col>
                <Col lg={3} className="d-flex footerlastsection justify-content-center">last section</Col>
            </Row>
        </Container>
        </>
    )
}
export default Footer;