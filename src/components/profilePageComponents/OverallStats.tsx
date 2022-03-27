import React, { useState } from 'react'
import { ApolloError, useQuery } from "@apollo/client";
import { GET_USER_NFTS } from "../../graphql/nft"
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

const OverallStats: React.FC = () =>{

    const [fightsWon, setFightsWon] = useState<number | null>();
    const [fightsLost, setFightsLost] = useState<number | null>()
    const [errors, setErrors] = useState<ApolloError | undefined>();
    const user = useSelector((state: RootStateOrAny) => state.data);
    const dispatch = useDispatch();
    
    
     //Getting all NFTS by user
     const nfts = useQuery( GET_USER_NFTS, {
        onCompleted(data){
            dispatch({type: 'userNfts', payload : data.getMyNfts})
            let totalWins = 0;
            let totalLosses = 0;

            // Get a value for fights won, fights lost upcoming.
            data.getMyNfts.forEach((nft: any) => {
                totalWins += nft.fights.filter((fight: any) => fight.winnerId === nft.id ).length;
                totalLosses += nft.fights.filter((fight: any) => fight.loserId === nft.id ).length;
            })
            setFightsWon(totalWins);
            setFightsLost(totalLosses)
        },
        onError(error){
            setErrors(error)
        },
        context: {
            headers: { Authorization: `Bearer ${user.token}` }
        }
    }) 

    return (
        <div className="overall-stats">
        <div>
            <h1>Overall Stats</h1>
            <h1>Total Wins: {fightsWon}</h1>
            <h1>Total Losses: {fightsLost}</h1>
        </div>
    </div>
    )

} 

export default OverallStats;