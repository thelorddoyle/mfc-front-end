import { useState } from "react";
import { ApolloError, useQuery } from "@apollo/client";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { GET_MY_TOURNAMENTS } from "../../graphql/user";
import { GET_USER_NFTS } from "../../graphql/nft"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSackDollar, faTrophy, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {roundTo} from 'round-to';
 
const ProfileHomePage: React.FC = () => {

    const user = useSelector((state: RootStateOrAny) => state.data);
    const userNfts = useSelector((state: RootStateOrAny) => state.nfts);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<ApolloError | undefined>();
    const [numberOfTournaments, setNumberOfTournaments] = useState<number | null>(1);
    const [fightsWon, setFightsWon] = useState<number | null>();
    const [fightsLost, setFightsLost] = useState<number | null>();

    //Getting all tournaments that users NFT's are taking part in
    const tournaments = useQuery( GET_MY_TOURNAMENTS, {
        onCompleted(data){
            console.log(data);
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

    //Getting all NFTS by user
    const nfts = useQuery( GET_USER_NFTS, {
        onCompleted(data){
            dispatch({type: 'userNfts', payload : data.getMyNfts})
            console.log('nfts:', data.getMyNfts)

            let totalWins = 0;
            let totalLosses = 0;

            // Get a value for fights won, fights lost upcoming.
            data.getMyNfts.forEach((nft: any) => {
                totalWins += nft.fights.filter((fight: any) => fight.winnerId === nft.id ).length;
                totalLosses += nft.fights.filter((fight: any) => fight.loserId === nft.id ).length;
            })

            console.log('totalWins count:', totalWins)
            console.log('totalLosses count:', totalLosses)

            setFightsWon(totalWins);
            setFightsLost(totalLosses)
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
                        <div className="show-eth"> 
                            <FontAwesomeIcon  icon={faSackDollar}/> 
                            <div>
                                <h2>Available funds</h2>
                                <p>
                                    Eth: {roundTo(user.amountInWallet, 2)}
                                </p>
                            </div>
                        </div>
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
                        <div className="overall-stats">
                            <div>
                                <h1>Overall Stats</h1>
                                <h1>Total Wins: {fightsWon}</h1>
                                <h1>Total Losses: {fightsLost}</h1>
                            </div>
                        </div>
                    </div>
                </>
            }
        </> 
    )
}

export default ProfileHomePage;