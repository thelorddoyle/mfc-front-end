import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSackDollar } from "@fortawesome/free-solid-svg-icons";
import {roundTo} from 'round-to';
const AvailableEth: React.FC = () =>{


    const user = useSelector((state: RootStateOrAny) => state.data);

    return (
        <div className="show-eth"> 
        <FontAwesomeIcon  icon={faSackDollar}/> 
        <div>
            <h2>Available funds</h2>
            <p>
                Eth: {roundTo(user.amountInWallet, 2)}
            </p>
        </div>
    </div>
    )
}

export default AvailableEth