//Modules/Packages
import React,{ useState } from "react"
import { useSelector, RootStateOrAny, useDispatch} from "react-redux"

//GraphQL/Querys/Mutations
import { ApolloError, useQuery } from "@apollo/client";
import { GET_MY_TOURNAMENTS } from "../graphql/user";

//Components
import TournamentsPage from "./TournamentsPage"
import ProfileHomePage from "../components/profilePageComponents/ProfileHomePage"
import Sidebar from "../components/profilePageComponents/Sidebar"
import AccountPage from "./AccountPage"
import FightersPage from "./FightersPage"

//Styles/Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUser } from "@fortawesome/free-solid-svg-icons";

import '../styles/sidebar.scss'
import '../styles/profilePage.scss'
import '../styles/fighters.scss'


const ProfilePage: React.FC = () => {

    const [component, setComponent] = useState<string | null>('default')
    const user = useSelector((state: RootStateOrAny) => state.data)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<ApolloError | undefined>();
    const [numberOfTournaments, setNumberOfTournaments] = useState<number | null>(1);


     //Getting all tournaments that users NFT's are taking part in
     const tournaments = useQuery( GET_MY_TOURNAMENTS, {
        onCompleted(data){
            setNumberOfTournaments(data.getAllMyTournaments.length)
            dispatch({type: 'myTournaments', payload : data.getAllMyTournaments})
        },
        onError(error){
            setErrors(error)
        },
        context: {
            headers: { Authorization: `Bearer ${user.token}` }
        }
    })

    const changeComponent = (component: string = "default") => {
        setComponent(component);
    }



    // switchPage expression used to load components conditionally
    const switchPage = (componentName: any) => {
        switch (componentName) {
            case 'default':
                return <ProfileHomePage numberOfTournaments={numberOfTournaments} user={user}/>
            case 'fighters':
                return <FightersPage/>
            case 'tournaments':
                return <TournamentsPage/> 
            case 'account':
                return <AccountPage/>
            default:
                return <ProfileHomePage numberOfTournaments={numberOfTournaments} user={user}/>
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