import React from 'react'

import { truncate } from "../../helpers/utils";

import { Link } from "react-router-dom";


interface Props{
    infoNft: any
}

const ShowFightsNft: React.FC<Props> = ({infoNft}) => {

        return(
            <div className="past-fights">
                <h1>All Fights</h1> 
                    {
                        infoNft.fights?.map(function(fight: any): JSX.Element | undefined {
                            // if the fight has been resolved
                            if (fight.winnerId) {
                               return (
                                    <div className={infoNft.id === fight.winnerId ? 'fight-details fight-won' : 'fight-details fight-lost'} key={fight.id}>
                                        <div>
                                            <h1>Match</h1>
                                            <span>#{truncate(fight.id)}</span>
                                        </div>
                                        <div>
                                            <h1>User</h1>
                                            <span>You{infoNft.id === fight.winnerId ? ' Won!' : ' Lost!'}</span>
                                        </div>
                                        <div>
                                            <h1>Winner: </h1>
                                            <span>#{truncate(fight.winnerId)}</span>
                                        </div>
                                        <div>
                                            <h1>Loser: </h1>
                                            <span>
                                                #{truncate(fight.loserId)}
                                            </span>
                                        </div>
                                        <div>
                                            <Link to={`/profile/fight/${fight.id}`}>View Fight</Link>
                                        </div>
                                    </div>
                                )
                            } else{
                                return (
                                    <div className={infoNft.id === fight.winnerId ? 'fight-details fight-won' : 'fight-details fight-lost'} key={fight.id}>
                                        <div>
                                            <h1>Match</h1>
                                            <span>#{truncate(fight.id)}</span>
                                        </div>
                                        <div>
                                            <h1>User</h1>
                                            <span>Upcoming</span>
                                        </div>
                                        <div>
                                            <h1>Winner: </h1>
                                            <span>#{truncate(fight.winnerId)}</span>
                                        </div>
                                        <div>
                                            <h1>Loser: </h1>
                                            <span>
                                                #{truncate(fight.loserId)}
                                            </span>
                                        </div>
                                        <div>
                                            <Link to={`/profile/fight/${fight.id}`}>View Fight</Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
            </div>
        )
}

export default ShowFightsNft