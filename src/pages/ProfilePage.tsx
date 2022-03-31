//Modules/Packages
import React from "react"
import { useSelector, RootStateOrAny } from "react-redux"
import { Outlet } from "react-router";

//Components
import Sidebar from "../components/profilePageComponents/Sidebar"

//Styles/Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUser } from "@fortawesome/free-solid-svg-icons";

import '../styles/sidebar.scss'
import '../styles/profilePage.scss'
import '../styles/fighters.scss'


const ProfilePage: React.FC = () => {

    const user = useSelector((state: RootStateOrAny) => state.data)
   

   
      return (
        <div className="container">
            <div className="profile-container">
                
                {
                user &&
                    <>
                        <Sidebar />
                            <div className="profile-page">
                                <div className="display-info">
                                    <div className="lets-fight">
                                        <h1>Hello, {user.username}</h1>
                                        <p>Let's Fight!</p>
                                    </div>
                                    <div className="icon-box">
                                        {
                                            user.profileImage !== undefined
                                            ?
                                            <img src={user.profileImage} alt="" style={{height:'50px', width: '50px', border: '3px black solid', borderRadius: '10px'}} />
                                            :
                                            <FontAwesomeIcon  icon={faUser}/> 
                                        }
                                    </div>
                                </div>
                                <Outlet context={user} />
                            </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ProfilePage 