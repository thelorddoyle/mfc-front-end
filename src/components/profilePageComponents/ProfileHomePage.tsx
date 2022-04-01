import { useEffect, useState } from "react";
import { useSelector, RootStateOrAny, useDispatch, } from "react-redux";


import  OverallStats  from "./OverallStats";
import AvailableEth from "./AvailabeEth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";


const ProfileHomePage: React.FC = () => {

    const userNfts = useSelector((state: RootStateOrAny) => state.nfts);
   
    const [numberOfTournaments, setNumberOfTournaments] = useState<number | null>(1);
    const {myTournaments}: object | any = useOutletContext();

    useEffect(()=>{
        setNumberOfTournaments(myTournaments?.length);
    },[])
    
    
    return (
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
                                <Link to="fighters">
                                    <div className="grid-nfts my-fighters" ></div>
                                    <h1>My Fighters</h1>
                                    <h2>View your roster of fighters <FontAwesomeIcon  icon={faArrowRight}/> </h2>
                                </Link>
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
    )
}

export default ProfileHomePage;