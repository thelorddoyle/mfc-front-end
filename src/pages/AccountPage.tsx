import React from "react";
import {  faArrowRight, faTrophy, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { roundTo } from "round-to";
import { useSelector, RootStateOrAny } from "react-redux";
import UpdateInfo from "../components/profilePageComponents/UpdateInfo";
import '../styles/account.scss'

const AccountPage: React.FC = () => {
    const user = useSelector((state: RootStateOrAny) => state.data)
    return(
        <>
            <div className="display-stats"> 
                <div className="tournaments"> 
                    <FontAwesomeIcon className="rotate-icon"  icon={faTrophy}/>
                    <h2>Speak to somebody from our team if you're stuck</h2>
                    <FontAwesomeIcon  icon={faArrowRight}/>
                </div>
                <div className="show-eth"> 
                    <FontAwesomeIcon  icon={faSackDollar}/> 
                    <div>
                        <h2>Available funds</h2>
                        <p>
                            Eth: {roundTo(user.amountInWallet, 2)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="account">
                <UpdateInfo/>
            </div>
        </>

    )
}

export default AccountPage