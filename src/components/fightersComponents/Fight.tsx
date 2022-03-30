import React, { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { GET_FIGHT } from "../../graphql/fight"
import { useState } from "react"
import "../../styles/fight.scss"
import {truncate, useScrollToTop, scrollFight}  from '../../helpers/utils'

interface Props{
    fightId: any,
    settingFightId: any
}
const Fight: React.FC<Props> = (fightId) => {
        
    const id = fightId.fightId
    const [fightObject, setFightObject] = useState<any | null> ({})
    const fight = fightObject.getFight
    const [delayWinner,setDelayWinner] = useState<any | null> (0);
    let player1Id:string = '';
    let player1UserName:string = '';
    let player2UserName:string = '';

    useScrollToTop();
    
    const fightQuery = useQuery( GET_FIGHT, {
        variables: {
            fightId: id
        },
        onCompleted(fightData){
            setFightObject(fightData);
            setDelayWinner(fightData.getFight.fightReplay.length);
            
        },
        onError(error){
            console.log(error)
        },
    })

    if(fight){
        player1Id = fight.nfts[0].id;
        player1UserName = fight.nfts[0].user.username;
        player2UserName = fight.nfts[1].user.username;
        //scrollFight();
    }
   
    if(delayWinner){
        for (let i = 0; i < delayWinner; i++) {
            scrollFight(i,`fight-${i}`, delayWinner)
            
        }
    }

    //TODO: make the two images of the NFTs 
    //TODO: make a highlighted message of the who has won 
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
                                                            <div id={`fight-${index}`} className="fight-sequence"  style={{ animationDelay: `${index * 1}s` }}>
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
                                                            <div id={`fight-${index}`} className="fight-sequence-2" style={{ animationDelay: `${index * 1}s` }}>
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


