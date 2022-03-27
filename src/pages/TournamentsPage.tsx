import React from 'react'
import { useSelector, RootStateOrAny} from "react-redux";


import MyTournaments from '../components/profilePageComponents/MyTournaments'
import '../styles/mytournaments.scss'



const TournamentsPage: React.FC = () => {
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

    return(
        <>  
            <MyTournaments 
             myTournaments={myTournaments}  
             pendingTournaments={pendingTournaments}
             completedTournaments={completedTournaments}
            />
        </>
    )
}

export default TournamentsPage