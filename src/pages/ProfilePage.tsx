//Modules/Packages
import React, { useState } from "react"

import { useSelector, RootStateOrAny } from "react-redux"
import { Outlet } from "react-router";

import { ApolloError, useQuery } from "@apollo/client";
import { GET_MY_TOURNAMENTS } from "../graphql/user";

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
    const nfts = useSelector((state: RootStateOrAny) => state.nfts)
    const [myTournaments,setMyTournaments] = useState();
    const [errors, setErrors] = useState<ApolloError | undefined>();
    //Getting all tournaments that users NFT's are taking part in
    useQuery( GET_MY_TOURNAMENTS, {
        onCompleted(data){
            setMyTournaments(data.getAllMyTournaments)
        },
        onError(error){
            setErrors(error)
        },
        context: {
            headers: { Authorization: `Bearer ${user.token}` }
        }
    })

   
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
                                <Outlet context={{user, nfts, myTournaments}} />
                            </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ProfilePage 