import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";

import "../../styles/compStyles/navbar.css";
export default props => {
    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    const handleMenuClick = () => {
        setShow(!show);
    }
    const handleItemClick = e => {
        console.log(e.target)
        if (e.id === 'nav1'){
            navigate('/home');
        } 
        if (e.id === 'nav2') {
            navigate('/login/new');
        }
        if (e.id === 'nav3') {
            navigate('/login');
        }
        if (e.id === 'nav4') {
            navigate('/preview');
        }
    }
    return (
        <>
            <div className="navbarwrap">
                <div className="topbar"></div>
                <button className="navdropdown dropdown" onClick={handleMenuClick}>
                    <div className="navtitlewrap">
                        {/* Navbar.Brand for icon */}
                        <h1 className="navtitle">StellarMe</h1>
                    </div>
                    {show ? 
                    <Dropdown.Menu show variant="dark" className="dropmenu" id="menu">
                        <Dropdown.Item eventKey="1" id="nav1" onClick={e=>handleItemClick(e.target)}>Home</Dropdown.Item>
                        <Dropdown.Item eventKey="2" id="nav2" onClick={e=>handleItemClick(e.target)}>Register</Dropdown.Item>
                        <Dropdown.Item eventKey="3" id="nav3" onClick={e=>handleItemClick(e.target)}>Login</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4" id="nav4" onClick={e=>handleItemClick(e.target)}>Preview</Dropdown.Item>
                    </Dropdown.Menu>
                    : 
                    <Dropdown.Menu variant="dark" className="dropmenu" id="menu">
                        <Dropdown.Item eventKey="1" id="nav1" onClick={e=>handleItemClick(e.target)}>Home</Dropdown.Item>
                        <Dropdown.Item eventKey="2" id="nav2" onClick={e=>handleItemClick(e.target)}>Register</Dropdown.Item>
                        <Dropdown.Item eventKey="3" id="nav3" onClick={e=>handleItemClick(e.target)}>Login</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4" id="nav4" onClick={e=>handleItemClick(e.target)}>Preview</Dropdown.Item>
                    </Dropdown.Menu>}
                </button>
            </div>
        </>
    )
}