import React from "react"
import { Link } from "react-router-dom"

const ConnectPage: React.FC = () => {

    return (
    <div className="container">
        <div className="flex">
            <Link to="/login">
                <button type="button" className="main-button">
                    Connect Wallet
                </button>
            </Link>
        </div>
    </div>
    )
}

export default ConnectPage;