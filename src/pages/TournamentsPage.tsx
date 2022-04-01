import { ApolloError } from '@apollo/client/';
import React, {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router';

import MyTournaments from '../components/profilePageComponents/MyTournaments'
import '../styles/mytournaments.scss'

const TournamentsPage: React.FC = () => {

const { myTournaments }:object | any = useOutletContext();

const [errors, setErrors] = useState<boolean | false>()

let pendingTournaments;
let completedTournaments;

    if(myTournaments) {
        try {
            pendingTournaments = myTournaments?.filter((tournament: any) => {
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
            setErrors(true);
        }

        try {
            completedTournaments = myTournaments?.filter((tournament: any) => tournament.status === "completed" );
        } catch (err) {
            setErrors(true);
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