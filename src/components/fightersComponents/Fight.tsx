import React from "react"
import '../../styles/Temp.css'
import { useSelector, RootStateOrAny } from "react-redux"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_FIGHT } from "../../graphql/fight"
import { useState } from "react"

const Fight: React.FC = () => {
    
    const nfts = useSelector((state: RootStateOrAny) => state.nfts)
    const {id} = useParams()
    const [fightObject, setFightObject] = useState<any | null> ({})
    const fight = fightObject.getFight
    let player1Id:any;
    let player1UserName:any;
    let player2UserName:any;
    
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

    if (fight) {
        console.log(fight)
        player1Id = fight.nfts[0].id
        player1UserName = fight.nfts[0].user.username
        player2UserName = fight.nfts[1].user.username
        console.log("img", fight.nfts[0].image);
    }


    //TODO: make the two images of the NFTs 
    //TODO: make a highlighted message of the who has won 
    return (
        <>
            <div>
                {
                    fight
                    ?
                    <div>
                        <img src={fight.nfts[0].image} alt="" style={{"width": "200px"}}/>
                        <img src={fight.nfts[1].image} alt="" style={{"width": "200px"}}/>
                        {
                            fight.fightReplay.map(function(move:any, index:number) {
                                return (
                                <div key={index}>
                                    <h1>
                                        {move.attackerId === player1Id ? player1UserName : player2UserName} {move.body}
                                    </h1>
                                </div>    
                                )  
                            })
                        }
                        
                        {
                            fight.winnerId === player1Id ? `${player1UserName} has won` : `${player2UserName} has won`
                        }
                        
                    </div>
                    :
                    <h1>Loading</h1>
                }

            </div>
        </>
    )
}

export default Fight;