import { useState } from "react";

import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import { ApolloError, useQuery } from "@apollo/client";
import { GET_MY_TOURNAMENTS } from "../../graphql/user";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import  OverallStats  from "./OverallStats";
import AvailableEth from "./AvailabeEth";

 
const ProfileHomePage: React.FC = () => {

    const user = useSelector((state: RootStateOrAny) => state.data);
    const userNfts = useSelector((state: RootStateOrAny) => state.nfts);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<ApolloError | undefined>();
    const [numberOfTournaments, setNumberOfTournaments] = useState<number | null>(1);

    //Getting all tournaments that users NFT's are taking part in
    const tournaments = useQuery( GET_MY_TOURNAMENTS, {
        onCompleted(data){
            setNumberOfTournaments(data.getAllMyTournaments.length)
            dispatch({type: 'myTournaments', payload : data.getAllMyTournaments})
        },
        onError(error){
            setErrors(error)
        },
        context: {
            headers: { Authorization: `Bearer ${user.token}` }
        }
    })

    

    return (
        <>
            {/* <Link to="/profile/fighters" >Fighters</Link>  
            <Link to="/profile/fight" >Fight</Link>   */}
            {
                user
                &&
                <>
                  
                    <div className="display-stats"> 
                        <div className="tournaments"> 
                            <FontAwesomeIcon className="rotate-icon"  icon={faTrophy}/>
                            <h2>You have { userNfts?.length } fighters taking part in {numberOfTournaments} tournaments.</h2>
                            <FontAwesomeIcon  icon={faArrowRight}/>
                        </div>
                        <AvailableEth/>
                    </div>

                    <div className="extra-info">
                        <div className="grid-4-info">
                            <div>
                                <div className="grid-nfts my-fighters" ></div>
                                <h1>My Fighters</h1>
                                <h2>View your roster of fighters <FontAwesomeIcon  icon={faArrowRight}/> </h2>
                            </div>
                            <div>
                                <div className="grid-nfts lets-fight"></div>
                                <h1>Let's fight</h1>
                                <h2>Fight to win money <FontAwesomeIcon  icon={faArrowRight}/> </h2>
                            </div>
                            <div>
                                <div className="grid-nfts join-discussion"></div>
                                <h1>Join the discussion</h1>
                                <h2>Join into our Discord <FontAwesomeIcon  icon={faArrowRight}/> </h2>
                             </div>
                            <div>
                                <div className="grid-nfts mfc-media"></div>
                                <h1>MFC Media</h1>
                                <h2>Stay up to date with MFC <FontAwesomeIcon  icon={faArrowRight}/> </h2>
                            </div>
                        </div>
                        <OverallStats/>
                    </div>
                </>
            }
        </> 
    )
}

export default ProfileHomePage;