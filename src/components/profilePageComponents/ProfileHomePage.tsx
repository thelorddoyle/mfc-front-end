import { useSelector, RootStateOrAny,  } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import  OverallStats  from "./OverallStats";
import AvailableEth from "./AvailabeEth";

 
interface Props{
    numberOfTournaments: number | null,
    user: object,
}

const ProfileHomePage: React.FC<Props> = ({numberOfTournaments, user}) => {

    const userNfts = useSelector((state: RootStateOrAny) => state.nfts);
    
    return (
        <>
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