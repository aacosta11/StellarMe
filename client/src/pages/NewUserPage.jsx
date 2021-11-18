import React from "react";
import RegisterFormComp from "../components/loginpage/RegisterFormComp";
import NavBarComp from "../components/homepage/NavBarComp";
export default props => {
    const handleResponse = res => {
        console.log(res)
    }
    return (
        <>
        <NavBarComp />
        
        <RegisterFormComp submit={handleResponse}/>
        </>
    )
}