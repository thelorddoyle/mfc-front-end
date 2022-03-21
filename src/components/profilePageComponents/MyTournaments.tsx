import React from "react"
import '../../styles/sidebar.scss'
import { Link } from "react-router-dom";
import { useSelector, RootStateOrAny} from "react-redux";
import { truncate } from "../../helpers/utils";
import '../../styles/mytournaments.scss'



const MyTournaments: React.FC = () => {
    // we are using the getMyTournaments endpoint to get the arr of tournaments that my nfts are participating in.

    const myTournaments = useSelector((state: RootStateOrAny) => state.myTournaments)
    let pendingTournaments;
    let completedTournaments;
    
    if(myTournaments) {
        try {
            pendingTournaments = myTournaments.filter((tournament: any) => {
                return tournament.status === "pending" || tournament.status === "ready"
            })

            if (pendingTournaments.length !== 0) {

                pendingTournaments = pendingTournaments.map((tournament: any)=> {
                    // for each tournament, add a field called count, then increment said field whiles looking in each fight. 
                    tournament.count = 0;
                    
                    tournament.fights.forEach( (fight: any) => {
                        tournament.count += fight.nfts.length;
                    })
            
                    return tournament;
                    
                })
            }
            
        } catch (err) {
            console.log(err)
        }

        try {
            completedTournaments = myTournaments.filter((tournament: any) => tournament.status === "completed" );
        } catch (err) {
            console.log(err)
        }
    }
    
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