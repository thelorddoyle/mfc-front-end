import React, { useEffect } from "react"
import { useState } from "react"
import ProfileHomePage from "../components/profilePageComponents/ProfileHomePage"
import FightersPage from "./FightersPage"
import Sidebar from "../components/profilePageComponents/Sidebar"
import '../styles/sidebar.scss'
import '../styles/profilePage.scss'

const ProfilePage: React.FC = () => {

    const [component,setComponet] = useState<string | null>('default')

    const changeComponent = (component: string = "default") => {
       setComponet(component);
    }

  
    return (
        <div className="profile-container">
                <Sidebar onClick={changeComponent}/>
                {
                    component === "default" ? <ProfileHomePage/> 
                    : 
                    component === "fighters" && <FightersPage/>
                    
                }
        </div>

    )
}

export default ProfilePage 