import React from "react"
import { Link } from "react-router-dom";
import { truncate } from "../../helpers/utils";

interface Props{
    myTournaments: object,
    pendingTournaments: [],
    completedTournaments: []
}

const MyTournaments: React.FC<Props> = ({myTournaments, pendingTournaments, completedTournaments}) => {
    //TODO: list out all the contestants (get them from the fights of the tournament);
    //TODO: make a button that routes to the specific tournament (LATER). 
    return (
        <div className="myTournaments card-navbar">

            <div className="past-fights">
                <h1>UPCOMING TOURNAMENTS</h1>
                <br />
            {
                myTournaments
                ?
                pendingTournaments.map((tournament: any) => {
                    return (
                        <div key={tournament.id} className='fight-details fight-won' >
                            <div>
                                <h1>Tournament</h1>
                                <span>#{truncate(tournament.id)}</span>
                            </div>
                            <div>
                                <h1>Round</h1>
                                <span>{tournament.round}</span>
                            </div>
                            <div>
                                <h1>Fight Slots Occupied</h1>
                                <span>{`${tournament.count}/32`}</span>
                            </div>
                            <Link to={`/tournament/${tournament.id}`}>View Tournament</Link>
                        </div>
                    )
                })
                :
                null
            }
            <br />
            <h1>COMPLETED TOURNAMENTS</h1>
            {
                myTournaments
                ?
                completedTournaments.map((tournament: any) => {
                    return (
                        <div className="fight-details fight-lost">
                            <div>
                                <h1>Tournament</h1>
                                <span>#{truncate(tournament.id)}</span>
                            </div>
                            <div>
                                <h1>Round</h1>
                                <span>{tournament.round}</span>
                            </div>
                            <div>
                                <h1>Fight Slots Bought</h1>
                                <span>32/32</span>
                            </div>
                            <Link to={`/tournament/${tournament.id}`}>View Tournament</Link>
                        </div>
                    )
                })
                :
                null
            }
            </div>
        </div>
    )
}

export default MyTournaments;