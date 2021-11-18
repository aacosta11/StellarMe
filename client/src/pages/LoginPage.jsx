import React from "react";
import RegisterFormComp from "../components/loginpage/RegisterFormComp";
import ExistingFormComp from "../components/loginpage/ExistingFormComp";
import NavBarComp from "../components/homepage/NavBarComp";
export default props => {
    const handleResponse = res => {
        console.log(res)
    }
    return (
        <>
        <NavBarComp />
        <ExistingFormComp submit={handleResponse}/>
        </>
    )
}