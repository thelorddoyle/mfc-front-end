import React, { useState } from "react"
import { useSelector, RootStateOrAny } from "react-redux";
import {  ApolloError, useQuery, useMutation } from "@apollo/client";
import { GET_ROUND } from "../../graphql/tournament"
import { MINT_NFT } from "../../graphql/nft";

const Mint: React.FC = () => {

    const [round, setRound] = useState<number | null>(1)
    const [errors, setErrors] = useState<ApolloError | undefined>()
    const user = useSelector((state:  RootStateOrAny) => state.data)

    //Getting Current Round of the tournament
    const {loading, error} = useQuery( GET_ROUND, {
        onCompleted(data){
            setRound(data.getCurrentTournament.round)
        },
        onError(){
            setErrors(error)
        }
    } )

    const [mintNft] = useMutation(MINT_NFT, {
        update(_, {data}){
           console.log(data); 
        },
        onError(err){
            console.log(err);
        },
        context:{
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }
        
    })

    const handleEvent = () => mintNft();

    return (
        
       
        <>
        {
            loading ? "Loading..." :
            <>
                <h1>Mint Your fighter</h1>
                <h2>Round { round }</h2>
                <p>Prize Money 10ETH </p>
                <p>Fighters Left 200</p>
                <button onClick={handleEvent} > MINT ME PAPI CHULO </button>
            </>

        }

            
        </>

    )
}

export default Mint;