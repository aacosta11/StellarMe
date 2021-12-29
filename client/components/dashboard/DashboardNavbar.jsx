import React, { useState } from "react";
import { motion, useTransform } from "framer-motion";
import { Nav } from "react-bootstrap";
import TopBar from "../TopBar";
import Image from "next/image";
import lumen from "../../img/stellar-top.png";
import lumen2 from "../../img/stellar-bottom.png";
// import { useRouter } from "next/router";
const DashboardNavbar = props => {
    const [activeTab, setActiveTab] = useState('');
    const [isFloaterActive, setIsFloaterActive] = useState(false);
    
    const floaterVariants = {
        active: { scale: 1.2, rotate: '0deg'},
        inactive: { scale: .8, rotate: '-25deg'}
    }

    // const router = useRouter();
    const handleTabs = e => {
        console.log(e.dataset.rrUiEventKey);
        activeTab === e.dataset.rrUiEventKey
        ? setActiveTab('')
        : setActiveTab(e.dataset.rrUiEventKey);
    }

    const handleFloater = (event,info) => {
        console.log('floater clicked!');
        setIsFloaterActive(isFloaterActive=>!isFloaterActive);
        
    }

    return (<>
        <TopBar />
            {/* title and search bar */}
            <div className="dashactions">
                <h3>[username/dropdown]</h3>
                <div className="d-flex">
                <button className="dashhome" onClick={()=>{console.log('home button clicked')}}>[home]</button>
                <div className="dashsearch">[~~~~~~~~searchbar~~~~~~~]</div>
                </div>
            </div>
            {/* tabs */}
            <Nav variant="tabs" className="justify-content-end dashpages" activeKey={activeTab}>
                <Nav.Item>
                    <Nav.Link onClick={e=>handleTabs(e.target)} eventKey='/dashboard/connect'>Trade</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={e=>handleTabs(e.target)} eventKey='/dashboard/market'>Accounts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={e=>handleTabs(e.target)} eventKey='/dashboard/wallet'>Connections</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="d-flex dashcompactwrap">
                <div className="dashsupercompact" onClick={()=>console.log('super compact menu was clicked')}>{/* replaces tabs AND searchbar */}
                    <h3>[username/bigger dropdown]</h3>
                </div>

                <motion.div className="dashfloatingmenu" transition={{duration: .15}} onTap={handleFloater}
                animate={
                isFloaterActive
                ? {rotate:'0deg', scale:3, margin:'12rem 8rem'} 
                : {rotate:'-25deg', scale:1, margin:'2rem 4rem'}}
                >
                    
                    <div className="">
                        <Image layout="responsive" src={lumen} alt="lumen half1"/>
                        <div className="dashfloatercontent">
                            <motion.div className="dashfloatercontent1" transition={{duration: .15}} 
                            animate={
                            isFloaterActive
                            ? {height: '40px'}
                            : {height: '0px'}
                            }></motion.div>
                            <motion.div className="dashfloatercontent2" transition={{duration: .15}}
                            animate={
                                isFloaterActive
                                ? {height: '40px'}
                                : {height: '0px'}
                                }></motion.div>
                            <motion.div className="dashfloatercontent3"  transition={{duration: .15}}
                            animate={
                                isFloaterActive
                                ? {height: '40px'}
                                : {height: '0px'}
                                }></motion.div>
                        </div>
                    </div>
                    <Image layout="responsive" src={lumen2} alt="lumen half2"/>
                    
                </motion.div>
            </div>
    </>)
}
export default DashboardNavbar;