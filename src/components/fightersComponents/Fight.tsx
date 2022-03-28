import React from "react"
import { useSelector, RootStateOrAny } from "react-redux"
import { useQuery } from "@apollo/client"
import { GET_FIGHT } from "../../graphql/fight"
import { useState } from "react"
import "../../styles/fight.scss"
import {useScrollToTop}  from '../../helpers/utils'

interface Props{
    fightId: any,
    settingFightId: any
}

const Fight: React.FC<Props> = (fightId, settingFightId) => {
        
    const nfts = useSelector((state: RootStateOrAny) => state.nfts)
    const id = fightId.fightId
    const [fightObject, setFightObject] = useState<any | null> ({})
    const fight = fightObject.getFight
    const [preparingFight, setPreparingFight] = useState<boolean | null> (false)
    let player1Id:string = '';
    let player1UserName:string = '';
    let player2UserName:string = '';

    useScrollToTop()

    const fightQuery = useQuery( GET_FIGHT, {
        variables: {
            fightId: id
        },
        onCompleted(fightData){
            console.log('Fight received successfully. All data found.')
            setFightObject(fightData)
        },
        onError(error){
            console.log(error)
        },
    })
    if(fight){
        player1Id = fight.nfts[0].id
        player1UserName = fight.nfts[0].user.username
        player2UserName = fight.nfts[1].user.username
    }

    //TODO: make the two images of the NFTs 
    //TODO: make a highlighted message of the who has won 
    return (

            <div className="container">
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
                                                            <div className="fight-sequence">
                                                                    <div>
                                                                        <img src={fight.nfts[0].image} alt="" />
                                                                    </div>
                                                                <div className="sequence">
                                                                    <h1>
                                                                        {move.attackerId === player1Id ? player1UserName : player2UserName} {move.body}
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className="fight-sequence-2">
                                                                    <div>
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
                                    <div className="winner-result">
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
                        <div className="fighter-details">
                            <img src={fight.nfts[0].image} className="fighter-details-images" alt="fighter1" />
                            <h3 className="versus">versus</h3>
                            <img src={fight.nfts[1].image} className="fighter-details-images" alt="fighter2" />
                        </div>
                        :
                        null
                    }
                </div> 
         </div>
    )
}

export default Fight;


