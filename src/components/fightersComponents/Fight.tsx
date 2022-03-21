import React, { useEffect } from "react"
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
    const [preparingFight, setPreparingFight] = useState<boolean | null> (false)
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

    useEffect(()=>{
        window.setTimeout(()=>{
            setPreparingFight(true);    
        },6000)
    },[])


    //TODO: make the two images of the NFTs 
    //TODO: make a highlighted message of the who has won 
    return (

            <>
                {
                    !preparingFight ? 

                    <h1 className="octagon-cage"> 
                        The Octagon is getting bloody
                    </h1>
                    
                    :
                <>
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
                                    <div className="winner">
                                        {
                                            fight.winnerId === player1Id ? `${player1UserName} has won` : `${player2UserName} has won`
                                        }
                                    </div>
                                </div>
                        :
                        <h1>Loading</h1>
                    }

                </>
            }
            
         </>
    )
}

export default Fight;


