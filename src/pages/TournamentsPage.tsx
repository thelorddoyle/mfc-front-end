import { ApolloError } from '@apollo/client/';
import React, {useState} from 'react'
import { useSelector, RootStateOrAny} from "react-redux";

import MyTournaments from '../components/profilePageComponents/MyTournaments'
import '../styles/mytournaments.scss'

const TournamentsPage: React.FC = () => {

const myTournaments = useSelector((state: RootStateOrAny) => state.myTournaments)
const [errors, setErrors] = useState<ApolloError | undefined>()

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
        setErrors(err as ApolloError);
    }

    try {
        completedTournaments = myTournaments.filter((tournament: any) => tournament.status === "completed" );
    } catch (err) {
        setErrors(err as ApolloError);
    }
}

    return(
        <>  

            {
                !errors
                
                ?
                    <MyTournaments 
                        myTournaments={myTournaments}  
                        pendingTournaments={pendingTournaments}
                        completedTournaments={completedTournaments}
                    />
                :
                    <h1>There has been an error</h1>                
            }
            
        </>
    )
}

export default TournamentsPage