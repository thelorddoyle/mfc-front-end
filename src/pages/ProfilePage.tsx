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


const ProfilePage: React.FC = () => {

    const [component, setComponent] = useState<string | null>('default')
    const user = useSelector((state: RootStateOrAny) => state.data)
    const changeComponent = (component: string = "default") => {
        setComponent(component);
    }

  
    return (
        <div className="profile-container">
                <Sidebar onClick={changeComponent}/>
                {
                     user
                     &&
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
                                component === "default" ? <ProfileHomePage/> 
                                : 
                                component === "fighters" ? <FightersPage/>
                                :
                                component === "tournaments" && <MyTournaments/>
                                
                            }
                        </div>
                }
        </div>

    )
}

export default ProfilePage 