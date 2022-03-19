import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () =>{

    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/connect">Connect Wallet</Link>
        </>
    )
}


export default Navbar