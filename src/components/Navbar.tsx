import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () =>{

    return (
        <>
            <Link to="/">Home</Link>
            {/* Roadmap */}
            {/* Docs */}
            {/* Mint */}
            <Link to="/connect">Connect Wallet</Link>
        </>
    )
}


export default Navbar