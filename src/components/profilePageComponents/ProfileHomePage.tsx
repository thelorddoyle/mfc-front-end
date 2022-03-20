import React from "react"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { ApolloError, useQuery } from "@apollo/client";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { GET_MY_TOURNAMENTS } from "../../graphql/user";
import { GET_USER_NFTS } from "../../graphql/nft"
 
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

        <>  
            <Link to="/profile/fighters" >Fighters</Link>  
            {
                user
                ?
                <div>
                    <h1>Hello, {user.username}</h1>
                    <h2>Eth: {user.amountInWallet}</h2>
                    <h2>You have { userNfts?.length } fighters taking part in {numberOfTournaments} tournaments.</h2>
                </div>
                :
                <h1>HELLOOO</h1>
            }
        </>

    )
}

export default ProfileHomePage;