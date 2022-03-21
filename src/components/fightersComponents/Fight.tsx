import React from "react"
import { useSelector, RootStateOrAny } from "react-redux"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_FIGHT } from "../../graphql/fight"
import { useState } from "react"
import "../../styles/fight.scss"

const Fight: React.FC = () => {
    
    const nfts = useSelector((state: RootStateOrAny) => state.nfts)
    const {id} = useParams()
    const [fightObject, setFightObject] = useState<any | null> ({})
    const fight = fightObject.getFight
    let player1Id:string = '';
    let player1UserName:string = '';
    let player2UserName:string = '';
    
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
        <div className="fight-container">
                {
                    fight
                    ?
                        <div className="fight-grid">
                            <div className="nft-arts">
                                <div>
                                    <img src={fight.nfts[0].image} alt="" style={{"width": "200px"}}/>
                                </div>
                                <div>
                                    <button className="main-button">Fight</button>
                                </div>
                                <div>
                                    <img src={fight.nfts[1].image} alt="" style={{"width": "200px"}}/>
                                </div>
                            </div>
                            <div className="fight-secuence">
                                {
                                    fight.fightReplay.map(function(move:any, index:number) {
                                        return (
                                        <div key={index} className="secuence">
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
                    </div>
                    :
                    <h1>Loading</h1>
                }

        </div>
    )
}

export default Fight;