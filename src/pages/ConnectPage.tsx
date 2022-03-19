import React from "react"
import { Link } from "react-router-dom"

const ConnectPage: React.FC = () => {

    return (
        <>
            <Link to="/login">
                <button type="button">
                    Connect Wallet
                </button>
            </Link>
        </>

    )
}

export default ConnectPage;