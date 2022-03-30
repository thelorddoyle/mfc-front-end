import React from "react"
import { useState } from "react";
import { useParams } from "react-router-dom";

import { ApolloError, useQuery } from "@apollo/client";
import { GET_TOURNAMENT } from "../../graphql/tournament"

import '../../styles/sidebar.scss'
import '../../styles/tournament.scss'

const Tournament: React.FC = () => {
    const [errors, setErrors] = useState<ApolloError | undefined>()
    // const [fights, setFights] = useState<any | null> ([]);
    const [tieredFights, setTieredFights] = useState<any | null> ([]);
    const {id: tournamentId} = useParams()

    const tournament = useQuery( GET_TOURNAMENT, {
        onCompleted(data){
            const fights  = data.getTournament.fights

            //separate the fights into their respective tiers. 
            let tiers = [];
            for (let i = 1; i <= 5; i++){
                // console.log(fights)
                const roundOfFights = fights.filter((fight: any)=> fight.tier === i);
                
                tiers.push(roundOfFights);
            }  

            setTieredFights(tiers);
        },
        onError(error){
            setErrors(error)
        },
        variables: {
            tournamentId
        },
    }) 


    // Switch Case that renders the appropriate heading depending on tierIndex 
    const renderSwitch = (tierI: number) => {
        switch(tierI){
            case 0: 
                return 'ROUND 1'
            case 1:
                return 'ROUND 2'
            case 2:
                return 'QUARTER FINALS'
            case 3:
                return 'SEMI FINALS'
            case 4:
                return 'GRAND FINALS'
            default: 
                return 'ERROR UNHANDLED ROUND'
        }
    }

    return (
        <div className="myTournaments card-navbar">
            <p>errors</p>
            {
                tieredFights.map((tier: any, i: number) => {
                    return <div key={i}>
                        <h1>
                            {
                                renderSwitch(i)
                            }
                        </h1>
                        <br />
                        <br />
                        {
                            tier.map((fight: any) => {
                                return <div>
                                    <p>{`Tournament ID: ${fight.id}, ${fight.winnerId ? `  Winner: ${fight.winnerId}` : ' Upcoming!'}`} </p>
                                    {
                                        fight.nfts[0] 
                                        ?
                                        <img src={fight.nfts[0].image} style={{"width": "50px"}} />
                                        :
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png" style={{"width": "50px"}} />

                                    }
                                    <span >Versus</span>
                                    {
                                        fight.nfts[1] 
                                        ?
                                        <img src={fight.nfts[1].image} style={{"width": "50px"}} />
                                        :
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png" style={{"width": "50px"}} />
                                    }
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}

export default Tournament;