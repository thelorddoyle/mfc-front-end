import React from "react"
import { Link } from "react-router-dom"

const Banner: React.FC = () => {

    return (
        <>
        
            <h1>Metaverse Fighting Championship</h1>
            <h2>Own. Fight. Win</h2>

            {/* TODO: CHANGE TO MINT PAGE */}
            <Link to="/login">
                <button type="button">
                    Mint
                </button>
            </Link>

            <h2>MFC is a blockchain game that allows participation through ownership of NFT's</h2>
            <p>Each token represents a fighter who will participate in tournaments - giving you the chance to win Ethereum prizes.</p>

        </>

    )
}

export default Banner;