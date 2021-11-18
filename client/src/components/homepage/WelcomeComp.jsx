import React from "react";
import Button from 'react-bootstrap/Button';
import "../../styles/compStyles/welcomeStyle.css";
export default props => {
    return (
        <>
            <div className="welcomewrap">
                <div className="welcomelogowrap">
                    <div style={{ "height": "100px", "width": "100px", "border": "3px solid black","backgroundColor":"grey" }}>
                    </div>
                </div>
                <div className="welcomebtns">
                    <Button variant="primary" size="md">
                        Get Started
                    </Button>
                    <Button variant="secondary" size="md">
                        Learn More
                    </Button>
                </div>
            </div>
        </>
    )
}