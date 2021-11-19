import React from "react";
import RegisterFormComp from "../components/loginpage/RegisterFormComp";
import NavBarComp from "../components/homepage/NavBarComp";
import { Link } from "react-router-dom";
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