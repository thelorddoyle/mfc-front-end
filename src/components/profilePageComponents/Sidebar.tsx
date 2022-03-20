import React from "react"
import '../../styles/sidebar.scss'
import { faHome, faUserGroup, faSackDollar, faHandBackFist, faRankingStar, faCog, faClone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <span>Fighters</span>
                </div>
                <div className="nav-menu">
                    <FontAwesomeIcon  icon={faSackDollar}/> 
                    <span>Tournaments</span>
                </div> 
                <div className="nav-menu">
                    <FontAwesomeIcon  icon={faHandBackFist}/> 
                    <span> Fight</span>
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
            <div className="mint-img-bottom">
                <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647771047/banner-fighter2_wt8tpy.png" alt="" />
            </div>     
        </div>
        

    )
}

export default Sidebar;