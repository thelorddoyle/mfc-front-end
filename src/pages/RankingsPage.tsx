import {  ApolloError, useQuery } from "@apollo/client";
import React, {useState} from 'react'
import { useSelector, RootStateOrAny} from "react-redux";


import { GET_RANKINGS } from "../graphql/nft";
import MyTournaments from '../components/profilePageComponents/MyTournaments';
import { truncate } from '../helpers/utils';


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
            console.log('error', error)
            setErrors(error)
        }
    } )

    //TODO: make an apollo query to get the findWins
    return(
        <>  
            {
                !errors
                ?
                    nfts?.map(function(nft: any, i: number): JSX.Element | undefined {
                        return (
                            <div className='fight-details fight-won' key={nft.id}>
                                <div>
                                    <img src={nft.image} alt="" style={{"width": "100px"}}/>
                                </div>
                                <div>
                                    <h1>Rank</h1>
                                    <span>#{i + 1}</span>
                                </div>
                                <div>
                                    <h1>Fighter ID: </h1>
                                    <span>{truncate(nft.id)}</span>
                                </div>
                                <div>
                                    <h1>Owner: </h1>
                                    <span>{truncate(nft.user.id)}</span>
                                </div>
                                <div>
                                    <h1>Wins</h1>
                                    <span>{nft.wins}</span>
                                </div>
                                <div key={nft.id} >
                                    <button>View Nft</button>
                                </div>

                                <br />
                                <br />
                                <br />
                            </div>
                        )
                    })
                :
                    <h1>There has been an error</h1>  
            }
        </>
    )
}

export default RankingsPage