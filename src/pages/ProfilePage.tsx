import React from "react"
import ProfileHomePage from "../components/profilePageComponents/ProfileHomePage"
import Sidebar from "../components/profilePageComponents/Sidebar"
import '../styles/sidebar.scss'
import '../styles/profilePage.scss'

const ProfilePage: React.FC = () => {

    return (
        <div className="profile-container">
                <Sidebar/>
                <ProfileHomePage/>
        </div>

    )
}

export default ProfilePage 