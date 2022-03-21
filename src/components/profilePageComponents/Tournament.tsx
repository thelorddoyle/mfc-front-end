import React, { useEffect } from "react"
import '../../styles/sidebar.scss'
import { useState } from "react";
import { Link } from "react-router-dom";
import { ApolloError, useQuery } from "@apollo/client";
import { useSelector, RootStateOrAny} from "react-redux";
import { GET_TOURNAMENT } from "../../graphql/tournament"
import { useParams } from "react-router-dom";

const Tournament: React.FC = () => {
    const [errors, setErrors] = useState<ApolloError | undefined>()
    const [fights, setFights] = useState<any | null> ([]);
    const [tieredFights, setTieredFights] = useState<any | null> ([]);
    const {id: tournamentId} = useParams()

    const tournament = useQuery( GET_TOURNAMENT, {
        onCompleted(data){
            setFights(data.getTournament.fights);
            
            // TODO: make the tournament work with state. 
            // make an array where each index is the fights belonging to each round. 
            
            let tiers = []
            for (let i = 1; i <= 5; i++){
                console.log(fights)
                const roundOfFights = fights.filter((fight: any)=> fight.tier === i)
                
                tiers.push(roundOfFights);
            }

            // console.log('tiers: counts', tiers.length)
            setTieredFights(tiers);

            tieredFights.forEach((tier: any, i:number) => {
                console.log(i + 1, tier)
            })


        },
        onError(error){
            setErrors(error)
        },
        variables: {
            tournamentId
        },
    }) 
    

    // const myTournaments = useSelector((state: RootStateOrAny) => state.myTournaments) //TODO: remember what to do for the useSelector. 
    // if(myTournaments){
    //     console.log('tournament', myTournaments);
    // }

    const renderSwitch = (i: number) => {
        switch(i){
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
        }
    }

    //TODO: discuss the use of TIER VS ROUND
    return (
        <div className="myTournaments card-navbar">

            {
                tieredFights.map((tier: any, i: number) => {
                    return <div>
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
                                    <p>{`Tournament ID: ${fight.id}, ${fight.nfts[0]} ${fight.winnerId ? `Winner: ${fight.winnerId}` : 'Pending Completion'}`} </p>
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