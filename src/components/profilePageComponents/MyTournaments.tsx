import React from "react"
import '../../styles/sidebar.scss'
import { Link } from "react-router-dom";
import { useSelector, RootStateOrAny} from "react-redux";


const MyTournaments: React.FC = () => {
    // we are using the getMyTournaments endpoint to get the arr of tournaments that my nfts are participating in.

    const myTournaments = useSelector((state: RootStateOrAny) => state.myTournaments)
    //Add the 
    let pendingTournaments = myTournaments.filter((tournament: any) => {
        return tournament.status === "pending" || tournament.status === "ready"
    }).map((tournament: any)=> {
        // for each tournament, add a field called count, then increment said field whiles looking in each fight. 
        tournament.count = 0;
        
        tournament.fights.forEach( (fight: any) => {
            tournament.count += fight.nfts.length;
        })

        return tournament;
        
    })
    
    const completedTournaments = myTournaments.filter((tournament: any) => tournament.status === "completed" );
    
    
    if(pendingTournaments) {
        console.log('tournaments', pendingTournaments);
    }
    
    //TODO: list out all the contestants (get them from the fights of the tournament);
    //TODO: make a button that routes to the specific tournament (LATER). 
    
    return (
        <div className="myTournaments card-navbar">
            <h1>UPCOMING TOURNAMENTS</h1>
            <br />
            {
                myTournaments
                ?
                pendingTournaments.map((tournament: any) => {
                    return (
                        <div>
                            {`${tournament.id}: ${tournament.status}, count: ${tournament.count}/32`}
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
                        <div>
                            {`${tournament.id}: ${tournament.status}, count: 32/32`}
                            <Link to={`/tournament/${tournament.id}`}>View Tournament</Link>
                        </div>
                    )
                })
                :
                null
            }
        </div>

    )
}

export default MyTournaments;