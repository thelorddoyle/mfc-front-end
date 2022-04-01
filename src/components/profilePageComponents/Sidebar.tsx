import React, { useEffect } from "react"
import {  faUserGroup, faSackDollar, faHandBackFist, faRankingStar, faCog, faClone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";

// interface Props{
//     onClick(component: string): void
// }

const Sidebar: React.FC = (props) => {

    // const user = useSelector((state:  RootStateOrAny) => state.data)

    // if (!user) {
    //     console.log('No user')
    // }

    return (
        <>
            <div className="sidebar card-navbar">
                <Link to="/" >
                    <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822121/Logos%20And%20Icons/MFC_White_diwtbf.png" alt="mfc_logo" className="sidebar-logo-mfc" />
                    </Link> 
                <div className="navigation">
                    <Link to="/profile">    
                        <div className="nav-menu" >
                                <FontAwesomeIcon icon={faClone} />
                                <span>Dashboard</span>
                        </div>   
                    </Link>  
                    <Link to="fighters">
                        <div className="nav-menu" >   
                                <FontAwesomeIcon icon={faUserGroup} />
                                <span>Fighters</span>
                        </div>
                    </Link>
                    <Link to="tournaments">
                        <div className="nav-menu" >
                                <FontAwesomeIcon  icon={faSackDollar}/> 
                                <span>Tournaments</span>
                        </div> 
                    </Link>
                    <div className="nav-menu">
                        <FontAwesomeIcon  icon={faHandBackFist}/> 
                        Fight 
                    </div>   
                    <Link to="rankings">
                        <div className="nav-menu" >
                        
                            <FontAwesomeIcon  icon={faRankingStar}/>               
                            <span>Rankings</span>
                        </div>   
                    </Link>
                    <Link to="account">
                        <div className="nav-menu" >
                            <FontAwesomeIcon  icon={faCog}/> 
                            <span>Account</span>
                        </div>   
                    </Link>
                </div> 
                <div className="bottom-nav">
                    <Link to='/mint'>
                        <div>
                            <div className="mint-img-bottom">
                                <h2 className="mint-another-nft-h2">Mint another NFT</h2>
                                <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647771046/NFTs/banner2_rruhkv.png" alt="" />
                            </div>   
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar;