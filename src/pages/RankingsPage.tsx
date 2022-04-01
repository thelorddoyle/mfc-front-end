import {  ApolloError, useQuery } from "@apollo/client";
import React, {useState} from 'react'

import Ranking from "../components/profilePageComponents/Ranking";

import { GET_RANKINGS } from "../graphql/nft";

import '../styles/rankings.scss'


const RankingsPage: React.FC = () => {

// const myTournaments = useSelector((state: RootStateOrAny) => state.myTournaments)
// make the apollo query that gets all the nfts.

    const [errors, setErrors] = useState<ApolloError | undefined>()
    const [nfts, setNfts] = useState<Array<Object> | null>([])

    const {loading, error} = useQuery( GET_RANKINGS, {
        onCompleted(data){
            setNfts(data.findWins);
        },
        onError(){
            setErrors(error)
        }
    } )

    //TODO: make an apollo query to get the findWins
    return(
        <>
        
            {
            loading ? <h1> Loading... </h1> :
                <div className="nfts">
                    {
                        !errors
                        ?
                            nfts?.map(function(nft: any, i: number): JSX.Element | undefined {
                                return (
                                <Ranking nft={nft} index={i} />
                                )
                            })
                        :
                            <h1>There has been an error</h1>  
                    }
                </div>
            }
        </>
    )
}

export default RankingsPage