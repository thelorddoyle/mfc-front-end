import React from "react"
import { useState } from "react";
import { ApolloError, useQuery } from "@apollo/client";
import { useSelector, RootStateOrAny } from "react-redux";
import { GET_MY_TOURNAMENTS } from "../../graphql/user";

const ProfileHomePage: React.FC = () => {

    const user = useSelector((state: RootStateOrAny) => state.data)

    const [errors, setErrors] = useState<ApolloError | undefined>()
    const [numberOfTournaments, setNumberOfTournaments] = useState<number | null>(1)

    //Getting all tournaments that users NFT's are taking part in
    const {loading, error} = useQuery( GET_MY_TOURNAMENTS, {
        onCompleted(data){
            console.log(data)
            setNumberOfTournaments(data.getAllMyTournaments.length)
        },
        onError(){
            setErrors(error)
        },
        context: {
            headers: { Authorization: `Bearer ${user.token}` }
        }
    })

    return (

        <>
            {
                user
                ?
                <div>
                    <h1>Hello, {user.username}</h1>
                    <h2>Eth: {user.amountInWallet}</h2>
                    <h2>Your XNUMBEROF NFTs are taking part in {numberOfTournaments} tournaments.</h2>
                </div>
                :
                <h1>HELLOOO</h1>
            }
        </>

    )
}

export default ProfileHomePage;