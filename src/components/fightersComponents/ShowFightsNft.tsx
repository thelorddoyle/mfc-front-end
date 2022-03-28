import React, { useEffect, useState } from "react" 
import { Link } from "react-router-dom";

import { truncate } from "../../helpers/utils";

interface Props{
    infoNft: any
    settingFightId: any
    
}

const ShowFightsNft: React.FC<Props> = ({infoNft, settingFightId}) => {
    const [resolvedFights, setResolvedFights] = useState<any | null> ([]);
    const [upcomingFights, setUpcomingFights] = useState<any | null> ([]);
    
    useEffect(() => {
        setResolvedFights(infoNft?.fights?.filter((fight: any) => fight.winnerId)) // probably turn this into 1 foreach. 
        setUpcomingFights(infoNft?.fights?.filter((fight: any) => !fight.winnerId)) // probably turn this into 1 foreach. 
    }, [infoNft]);
    
    //TODO: refactor this code. 
    return( 
        <div className="past-fights">
            <h1>All Fights</h1> 
                {
                    upcomingFights?.map(function(fight: any): JSX.Element | undefined {
                        // if the fight has been resolved
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
                                <div key={fight.id} onClick={()=> settingFightId(fight.id) }>
                                    <button>View Fight</button>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    resolvedFights?.map(function(fight: any): JSX.Element | undefined {
                        // if the fight has been resolved
                        return (
                            <div className={infoNft.id === fight.winnerId ? 'fight-details fight-won' : 'fight-details fight-lost'} key={fight.id}>
                                <div>
                                    <h1>Match</h1>
                                    <span>#{truncate(fight.id)}</span>
                                </div>
                                <div>
                                    <h1>Status</h1>
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
                                <div key={fight.id} onClick={()=> settingFightId(fight.id) }>
                                    <button>View Fight</button>
                                </div>
                            </div>
                        )
                    })
                }

        </div>
    )
}

export default ShowFightsNft