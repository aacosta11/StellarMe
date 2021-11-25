import React from "react";
import NavBarComp from "../components/homepage/NavBarComp";
import WelcomeComp from "../components/homepage/WelcomeComp";
import SectionOneComp from "../components/homepage/SectionOneComp";
import Section2Comp from "../components/homepage/Section2Comp";
import Section3Comp from "../components/homepage/Section3Comp";
import "../styles/pageStyles/homeStyle.css"
export default props => {
    return (
        <>
        <NavBarComp />
        <WelcomeComp />
        <SectionOneComp /> 
        <Section2Comp />
        <Section3Comp />
        </>
    )
}