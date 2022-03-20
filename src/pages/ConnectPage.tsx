import React from "react"
import { Link } from "react-router-dom"

const ConnectPage: React.FC = () => {

    return (
        <div className="flex">
            <Link to="/login">
                <button type="button" className="main-button">
                    Connect Wallet
                </button>
            </Link>
        </div>

    )
}

export default ConnectPage;