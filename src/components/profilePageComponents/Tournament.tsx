import React, { useEffect } from "react"
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
    const [nftss, setNftss] = useState<any | null> ([]);
    const {id: tournamentId} = useParams()

    const { loading, error, data } = useQuery( GET_TOURNAMENT, {
        onCompleted(data){
            const fights  = data.getTournament.fights
            let nfts: Array<any> = []

            fights.forEach((fight: any) => {
                nfts.push(...fight.nfts);
            }); 

            setNftss(nfts);
            console.log('nftss', nftss);
            
        },
        onError(error){
            setErrors(error)
        },
        variables: {
            tournamentId
        },
    }) 
    
    // Loop through the fights, get the nfts imgs
    
    // Switch Case that renders the appropriate heading depending on tierIndex 

    // TODO: get the tournaments showing in appropriate fighting order. 
    // loop through the 31 fights, and get a the img for them. 

    return (
        <div className="myTournaments card-navbar">
            <div className="wrapper">
                <div className="item">
                    <div className="item">
                        <div className="item-parent">
                            <img src={nftss[0]?.image}/>
                        </div>
                        <div className="item-childrens">
                                <div className="item-child">
                                    <div className="item">
                                        <div className="item-parent">
                                            <p>Finalist #1</p>
                                        </div>
                                        <div className="item-childrens">
                                            <div className="item-child">
                                                <div className="item">
                                                    <div className="item-parent">
                                                        <p>Semi #1</p>
                                                    </div>
                                                    <div className="item-childrens">
                                                        <div className="item-child">
                                                            <div className="item">
                                                                <div className="item-parent">
                                                                    <p>Round 2</p>
                                                                </div>
                                                                <div className="item-childrens">
                                                                    <div className="item-child">
                                                                        <img src={nftss[0]?.image}/>
                                                                    </div>
                                                                    <div className="item-child">
                                                                        <img src={nftss[1]?.image}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item-child">
                                                            <div className="item">
                                                                <div className="item-parent">
                                                                    <p>Round 2</p>
                                                                </div>
                                                                <div className="item-childrens">
                                                                    <div className="item-child">
                                                                        <img src={nftss[2]?.image}/>
                                                                    </div>
                                                                    <div className="item-child">
                                                                        <img src={nftss[3]?.image}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-child">
                                                <div className="item">
                                                    <div className="item-parent">
                                                        <p>Semi #2</p>
                                                    </div>
                                                    <div className="item-childrens">
                                                        <div className="item-child">
                                                            <div className="item">
                                                                <div className="item-parent">
                                                                    <p>Round 2</p>
                                                                </div>
                                                                <div className="item-childrens">
                                                                    <div className="item-child">
                                                                        <img src={nftss[4]?.image}/>
                                                                    </div>
                                                                    <div className="item-child">
                                                                        <img src={nftss[5]?.image}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item-child">
                                                            <div className="item">
                                                                <div className="item-parent">
                                                                    <p>Round 2</p>
                                                                </div>
                                                                <div className="item-childrens">
                                                                    <div className="item-child">
                                                                        <img src={nftss[6]?.image}/>
                                                                    </div>
                                                                    <div className="item-child">
                                                                        <img src={nftss[7]?.image}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="item-child">
                                <div className="item">
                                    <div className="item-parentå">
                                    <div className="item">
                                        <div className="item-parent">
                                            <p>Finalist #2</p>
                                        </div>
                                        <div className="item-childrens">
                                            <div className="item-child">
                                                <div className="item">
                                                    <div className="item-parent">
                                                        <p>Semi #3</p>
                                                    </div>
                                                    <div className="item-childrens">
                                                        <div className="item-child">
                                                            <div className="item">
                                                                <div className="item-parent">
                                                                    <p>Round 2</p>
                                                                </div>
                                                                <div className="item-childrens">
                                                                    <div className="item-child">
                                                                        <img src={nftss[8]?.image}/>
                                                                    </div>
                                                                    <div className="item-child">
                                                                        <img src={nftss[9]?.image}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item-child">
                                                            <div className="item">
                                                                <div className="item-parent">
                                                                    <p>Round 2</p>
                                                                </div>
                                                                <div className="item-childrens">
                                                                    <div className="item-child">
                                                                        <img src={nftss[10]?.image}/>
                                                                    </div>
                                                                    <div className="item-child">
                                                                        <img src={nftss[11]?.image}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-child">
                                                <div className="item">
                                                    <div className="item-parent">
                                                        <p>Semi #4</p>
                                                    </div>
                                                    <div className="item-childrens">
                                                        <div className="item-child">
                                                            <div className="item">
                                                                <div className="item-parent">
                                                                    <p>Round 2</p>
                                                                </div>
                                                                  <div className="item-childrens">
                                                                    <div className="item-child">
                                                                        <img src={nftss[12]?.image}/>
                                                                    </div>
                                                                    <div className="item-child">
                                                                        <img src={nftss[13]?.image}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item-child">
                                                            <div className="item">
                                                                <div className="item-parent">
                                                                    <p>Round 2</p>
                                                                </div>
                                                                  <div className="item-childrens">
                                                                    <div className="item-child">
                                                                        <img src={nftss[14]?.image}/>
                                                                    </div>
                                                                    <div className="item-child">
                                                                        <img src={nftss[15]?.image}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tournament;