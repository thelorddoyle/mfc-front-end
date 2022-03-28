import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight, faHandBackFist} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


import AvailableEth from "../profilePageComponents/AvailabeEth";

import { QueryResult } from "@apollo/client";

interface Props{
    nfts: Array<[]>,
    getUserNfts: QueryResult,
    settingInfoNfts:(data: object)=> void;
}


const ShowNfts: React.FC<Props> = ({nfts, getUserNfts, settingInfoNfts}) => {

    const [isActive, setActive] = useState(null)

    const toggle = (i:any) => {
        setActive(i);
      };

    return(
        <>
            <Link to="/mint"> 
                <div className="display-stats"> 
                    <div className="fighters"> 
                        <FontAwesomeIcon className="rotate-icon"  icon={faHandBackFist}/>
                        <h2>Buy more fighters for a chance to win more money</h2>
                        <FontAwesomeIcon  icon={faArrowRight}/>
                    </div>
                    <AvailableEth/>
                </div>
            </Link>         
            <div className="show-nfts">
                <div className="scroll-bar">
                    {
                        getUserNfts.loading ? "loading your nfts" :
                        nfts?.map((el: any) => (
                            <div key={el.id} className="nft-container" onClick={()=> settingInfoNfts(el) } >
                                <div className="img-content">
                                    <img src={el.image} className="square" alt=""  />
                                    <div key={el.id} className={isActive === el.id ? 'portfolio-overlay-clicked': "portfolio-overlay"} onClick={() => toggle(el.id)}></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ShowNfts