import React from "react"
import { Link } from "react-router-dom"

const Banner: React.FC = () => {

    return (
        <div className="hero-banner">
            <h1>METAVERSE FIGHTING CHAMPIONSHIP</h1>
            <h2>OWN. FIGHT. WIN</h2>

            <Link to="/mint">
                <button type="button" className="main-button">
                    Mint
                </button>
            </Link>
            <div className="sub-banner"> 
                <h3>MFC is a blockchain game that allows </h3>
                <h3>participation through ownership of NFT's</h3>
                <p>Each token represents a fighter who will participate in tournaments - giving you the chance to win Ethereum prizes.</p>
            </div>
        </div>

    )
}

export default Banner;