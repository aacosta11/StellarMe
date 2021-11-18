import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "../../styles/compStyles/section1Style.css";
export default props => {

    return (
        <>
            <div className="sec1container">
            <Carousel fade className="carousel1">
                <Carousel.Item>
                    {/* img can go here */}
                    <div className="carouselslide"></div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* img can go here */}
                    <div className="carouselslide"></div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselslide"></div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}