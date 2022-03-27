import React from "react";

import { RootStateOrAny } from "react-redux";

import { truncate } from "../../helpers/utils";

interface Props{
    infoNft: any
    user: RootStateOrAny
}

const ShowInfoNft: React.FC<Props> = ({infoNft, user})=>{
    return(
        <div className="show-nft-info">
            { Object.keys(infoNft).length !== 0 && 
                <>
                    <div className="glass-card-nft">
                        <h1> 
                            Fighter #<span >{truncate(infoNft?.id)}</span>
                        </h1>
                        <h2>
                            User: #<span>{truncate(user?.id)} </span>
                        </h2>
                        <h2>
                            Mint Season: Genesis <span> 1 </span>
                        </h2>
                    </div>
                    <div className="glass-card-nft">
                        <div>
                            <h1> 
                                Stats
                            </h1>
                            <h2>
                                <p>Total Fights: {infoNft?.fights?.length}</p>
                                <p>Total Wins: {
                                    infoNft?.fights?.filter((fight: any) => fight.winnerId === infoNft.id).length
                                }</p>
                                <p>Total Losses: {
                                    infoNft?.fights?.filter((fight: any) => fight.loserId === infoNft.id).length
                                }</p>
                            </h2>
                        </div>
                        
                    </div>
                    <div className="img-card-nft">
                        <div className="hero-text">
                            <h1>
                                Let's fight
                            </h1>   
                        </div>
                    </div>
                </>
            }
        </div>
    )
    
}

export default ShowInfoNft