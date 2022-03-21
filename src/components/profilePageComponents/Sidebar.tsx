import React from "react"
import {  faUserGroup, faSackDollar, faHandBackFist, faRankingStar, faCog, faClone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Props{
    onClick(component: string): void
}

const Sidebar: React.FC<Props> = (props) => {

    return (
        <div className="sidebar card-navbar">
            <div className="nav-logo">
            <Link to="/" ><h1>MFC</h1></Link>  
            </div>
            <div className="navigation">
                <div className="nav-menu" onClick={()=>props.onClick('default')}>
                    <FontAwesomeIcon icon={faClone} />
                        <span>Dashboard</span>
                </div>    
                <div className="nav-menu" onClick={()=>props.onClick('fighters')}>   
                    <FontAwesomeIcon icon={faUserGroup} />
                     Fighters 
                </div>
                <div className="nav-menu" onClick={()=>props.onClick('tournaments')}>
                    <FontAwesomeIcon  icon={faSackDollar}/> 
                    <span>Tournaments</span>
                </div> 
                <div className="nav-menu" onClick={()=>props.onClick('fight')}>
                    <FontAwesomeIcon  icon={faHandBackFist}/> 
                    Fight 
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