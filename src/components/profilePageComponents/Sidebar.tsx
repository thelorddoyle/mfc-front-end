import React from "react"
import {  faUserGroup, faSackDollar, faHandBackFist, faRankingStar, faCog, faClone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Sidebar: React.FC = () => {

    return (
        <div className="sidebar card-navbar">
            <div className="nav-logo">
                <h1>MFC</h1>
            </div>
            <div className="navigation">
                <div className="nav-menu">
                    <FontAwesomeIcon icon={faClone} />
                        <span>Dashboard</span>
                </div>    
                <div className="nav-menu">   
                    <FontAwesomeIcon icon={faUserGroup} />
                    <Link to="/profile/fighters" >Fighters</Link> 
                </div>
                <div className="nav-menu">
                    <FontAwesomeIcon  icon={faSackDollar}/> 
                    <span>Tournaments</span>
                </div> 
                <div className="nav-menu">
                    <FontAwesomeIcon  icon={faHandBackFist}/> 
                    <Link to="/profile/fight" >Fight</Link>  
                </div>   
                <div className="nav-menu">
                    <FontAwesomeIcon  icon={faRankingStar}/>               
                     <span>Rankings</span>
                </div>   
                <div className="nav-menu">
                    <FontAwesomeIcon  icon={faCog}/> 
                    <span>Account</span>
                </div>   
            </div> 
            <div className="bottom-nav">
                <div className="mint-img-bottom">
                    <div> <Link to='/mint'> Mint another nft </Link> </div>
                    <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647771047/banner-fighter2_wt8tpy.png" alt="" />
                </div>   
            </div>
        </div>

    )
}

export default Sidebar;