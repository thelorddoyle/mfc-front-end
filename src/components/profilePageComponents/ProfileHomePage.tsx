import React from "react"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { ApolloError, useQuery } from "@apollo/client";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { GET_MY_TOURNAMENTS } from "../../graphql/user";
import { GET_USER_NFTS } from "../../graphql/nft"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSackDollar, faTrophy, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {roundTo} from 'round-to';
 
const ProfileHomePage: React.FC = () => {

    const user = useSelector((state: RootStateOrAny) => state.data)
    const userNfts = useSelector((state: RootStateOrAny) => state.nfts)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<ApolloError | undefined>()
    const [numberOfTournaments, setNumberOfTournaments] = useState<number | null>(1)
    

    //Getting all tournaments that users NFT's are taking part in
    const tournaments = useQuery( GET_MY_TOURNAMENTS, {
        onCompleted(data){
            console.log(data);
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

    //Getting all NFTS by user
    const nfts = useQuery( GET_USER_NFTS, {
        onCompleted(data){
        dispatch({type: 'userNfts', payload : data.getMyNfts})
        },
        onError(error){
            setErrors(error)
        },
        context: {
            headers: { Authorization: `Bearer ${user.token}` }
        }
    })  

    return (

        <div className="profile-page">
            {/* <Link to="/profile/fighters" >Fighters</Link>  
            <Link to="/profile/fight" >Fight</Link>   */}
            {
                user
                ?
                <>
                    <div className="display-info">
                        <div>
                            <h1>Hello, {user.username}</h1>
                            <p>Let's Fight!</p>
                        </div>
                        <div>
                            <FontAwesomeIcon  icon={faUser}/> 
                        </div>
                    </div>
                    <div className="display-stats"> 
                        <div className="tournaments"> 
                            <FontAwesomeIcon className="rotate-icon"  icon={faTrophy}/>
                            <h2>You have { userNfts?.length } fighters taking part in {numberOfTournaments} tournaments.</h2>
                            <FontAwesomeIcon  icon={faArrowRight}/>
                        </div>
                        <div className="show-eth"> 
                            <FontAwesomeIcon  icon={faSackDollar}/> 
                            <div>
                                <h2>Available funds</h2>
                                <p>
                                    Eth: {roundTo(user.amountInWallet, 2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
                :
                <h1>HELLOOO</h1>
            }
        </div> 

    )
}

export default ProfileHomePage;