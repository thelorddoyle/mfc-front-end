import React from "react"
import ProfileHomePage from "../components/profilePageComponents/ProfileHomePage"
import Sidebar from "../components/profilePageComponents/Sidebar"
const ProfilePage: React.FC = () => {

    return (
        <div className="profile-container">
                <Sidebar/>
                <ProfileHomePage/>
        </div>

    )
}

export default ProfilePage 