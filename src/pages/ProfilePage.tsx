import React,{ useState } from "react"
import { useSelector, RootStateOrAny } from "react-redux"
import ProfileHomePage from "../components/profilePageComponents/ProfileHomePage"
import FightersPage from "./FightersPage"
import Sidebar from "../components/profilePageComponents/Sidebar"
import {  faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/sidebar.scss'
import '../styles/profilePage.scss'
import '../styles/fighters.scss'
import MyTournaments from "../components/profilePageComponents/MyTournaments"
import AccountPage from "./AccountPage"


const ProfilePage: React.FC = () => {

    const [component, setComponent] = useState<string | null>('default')
    const user = useSelector((state: RootStateOrAny) => state.data)
    const changeComponent = (component: string = "default") => {
        setComponent(component);
    }

    // switchPage expression used to load components conditionally
    const switchPage = (componentName: any) => {
        switch (componentName) {
            case 'default':
                return <ProfileHomePage/>
            case 'fighters':
                return <FightersPage/>
            case 'tournaments':
                return <MyTournaments/> 
            case 'account':
                return <AccountPage/>
            default:
                return <ProfileHomePage/>
        }
    }
  
    return (
        <div className="container">
            <div className="profile-container">
                <Sidebar onClick={changeComponent}/>
                {user &&
                    <div className="profile-page">
                        <div className="display-info">
                            <div>
                                <h1>Hello, {user.username}</h1>
                                <p>Let's Fight!</p>
                            </div>
                            <div>
                                <FontAwesomeIcon  icon={faUser}/> 
                            </div>
                        </div>
                        {
                            switchPage(component)
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default ProfilePage 