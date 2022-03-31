import React, { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { GET_FIGHT } from "../../graphql/fight"
import { useState } from "react"
import "../../styles/fight.scss"
import {truncate, useScrollToTop, scrollFight}  from '../../helpers/utils'
import { useParams } from "react-router"


const Fight: React.FC = () => {
        
    const { id  }  = useParams();
    const [fightObject, setFightObject] = useState<any | null> ({})
    const fight = fightObject.getFight
    const [delayWinner,setDelayWinner] = useState<any | null> (undefined);
    let player1Id:string = '';
    let player1UserName:string = '';
    let player2UserName:string = '';

    useScrollToTop();
    
    const scrollDown = (duration: number) => {
        for (let i = 0; i < duration; i++) {
            scrollFight(i,`fight-${i}`)
        }
    }
    useQuery( GET_FIGHT, {
        variables: {
            fightId: id
        },
        onCompleted(fightData){
            setFightObject(fightData);
            setDelayWinner(fightData.getFight.fightReplay.length);
            scrollDown(fightData.getFight.fightReplay.length);
        },
        onError(error){
            console.log(error)
        },
    })

    if(fight){
        player1Id = fight.nfts[0].id;
        player1UserName = fight.nfts[0].user.username;
        player2UserName = fight.nfts[1].user.username;
    }
    

    return (

                <div className="fight-container">
                    {
                        fight
                        
                        ?
                           
                            <div className="fight-display">
                                    {
                                        fight.fightReplay.map(function(move:any, index:number) {
                                            
                                            return (
                                                    
                                                    <>  
                                                        
                                                        {
                                                            fight.nfts[0].id === move.attackerId
                                                            ?
                                                            <div key={`fight-${index}`} id={`fight-${index}`} className="fight-sequence"  style={{ animationDelay: `${index * 1}s` }}>
                                                                    <div className="fighter-image">
                                                                        <img src={fight.nfts[0].image} alt="" />
                                                                    </div>
                                                                <div className="sequence">
                                                                    <h1>
                                                                        {move.attackerId === player1Id ? player1UserName : player2UserName} {move.body}
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div key={`fight-${index}`} id={`fight-${index}`} className="fight-sequence-2" style={{ animationDelay: `${index * 1}s` }}>
                                                                    <div className="fighter-image">
                                                                        <img src={fight.nfts[1].image} alt=""/>
                                                                    </div>
                                                                    <div className="sequence" >
                                                                        <h1>
                                                                            {move.attackerId === player1Id ? player1UserName : player2UserName} {move.body}
                                                                        </h1>
                                                                    </div>
                                                                
                                                            </div>
                                                        }
                                                </> 

                                                )  
                                        })
                                    }
                                    <div className="winner-result"  style={{ animationDelay: `${delayWinner}s` }}>
                                        <div className="winner">
                                            {
                                                fight.winnerId === player1Id ? `${player1UserName} has won` : `${player2UserName} has won`
                                            }
                                        </div>
                                    </div>
                                </div>
                        :
                        <h1 className="octagon-cage">Loading fight...</h1>
                    }
                    {
                        fight
                        ?
                       <>
                        
                            <div className="fighter-details">
                                <img src={fight.nfts[0].image} className="fighter-details-images" alt="fighter1" />
                                <div className="oponents">
                                    <h1>{fight.nfts[0].user.username}</h1>
                                    <h2> #{truncate(fight.nfts[0].id)} </h2>
                                </div>
                                <h3 className="versus">vs.</h3>
                                <div className="oponents">
                                    <h1>{fight.nfts[1].user.username}</h1>
                                    <h2> #{truncate(fight.nfts[1].id)}  </h2>
                                </div>
                                <img src={fight.nfts[1].image} className="fighter-details-images" alt="fighter2" />
                            </div>
                        </>
                        :
                        null
                    }
                </div> 
    )
}

export default Fight;


