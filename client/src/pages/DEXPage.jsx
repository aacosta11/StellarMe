import React from "react";
import NavBarComp from "../components/homepage/NavBarComp";
import Table from "react-bootstrap/Table";
export default props => {
    return (
        <>
        <NavBarComp /> 
        <Table responsive="sm">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Asset</td>
                    <td>Price(XLM)</td>
                    <td>Price(USD)</td>
                    <td>Volume(24hr)</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{/* fill in with data */}</td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}