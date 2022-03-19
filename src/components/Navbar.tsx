import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () =>{

    return (
        <>
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
        </>
    )
}


export default Navbar