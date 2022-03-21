import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useQuery, ApolloError } from "@apollo/client";
import { useSelector, useDispatch, RootStateOrAny} from "react-redux";
import { GET_USER_NFTS } from "../../graphql/nft";
import { useNavigate } from "react-router-dom";
import { roundTo } from "round-to";
import {  faArrowRight, faHandBackFist, faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { truncate } from "../../helpers/utils";


const Fighters: React.FC = () => {

    const user = useSelector((state:  RootStateOrAny) => state.data)
    const nfts = useSelector((state: RootStateOrAny) => state.nfts)
    const [errors, setErrors] = useState<ApolloError | undefined>()
    const dispatch = useDispatch();
    const [infoNft, setInfoNft] = useState<any | null> ({})

    console.log(infoNft);
    
   //Getting all NFTS by user
   const getUserNfts = useQuery( GET_USER_NFTS, {
        onCompleted(data){
            dispatch({type: 'userNfts', payload : data.getMyNfts})
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
        <Link to="/mint"> 
            <div className="display-stats"> 
                <div className="fighters"> 
                    <FontAwesomeIcon className="rotate-icon"  icon={faHandBackFist}/>
                    <h2>Buy more fighters for a chance to win more money</h2>
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
        </Link>         
        <div className="show-nfts">
            <div className="scroll-bar">
                {
                    getUserNfts.loading ? "loading your nfts" :
                    nfts?.map((el: any) => (
                        <div key={el.id} className="nft-container" onClick={()=> setInfoNft(el) }>
                            <img src={el.image} alt=""/>
                        </div>
                    ))
                }
          </div>
        </div>
        <div className="show-nft-info">
            { Object.keys(infoNft).length !== 0 && 
                <>
                    <div className="glass-card-nft">
                        <h1> 
                            Fighter #<span >{truncate(infoNft?.id)}</span>
                        </h1>
                        <h2>
                            User: #<span>{truncate(user?.id)} </span>
                        </h2>
                        <h2>
                            Mint Season: Genesis <span> 1 </span>
                        </h2>
                    </div>
                    <div className="glass-card-nft">
                        <div>
                            <h1> 
                                Stats
                            </h1>
                            <h2>
                                Total Fights: #<span>{infoNft?.fights?.length} </span>
                            </h2>
                        </div>
                        
                    </div>
                    <div className="img-card-nft">
                        <div className="hero-text">
                            <h1>
                                Let's fight
                            </h1>   
                        </div>
                    </div>
                </>
            }
        </div>
            <div className="past-fights">
                <h1>Past Fights</h1> 
                    {

                        infoNft.fights?.map(function(fight: any): JSX.Element | undefined {
                            // if the fight has been resolved
                            if (fight.winnerId) {
                               return (
                                    <div className={infoNft.id === fight.winnerId ? 'fight-details fight-won' : 'fight-details fight-lost'} key={fight.id}>
                                        <div>
                                            <h1>Match</h1>
                                            <span>#{truncate(fight.id)}</span>
                                        </div>
                                        <div>
                                            <h1>User</h1>
                                            <span>{infoNft.id === fight.winnerId ? 'You' : 'They'} won!</span>
                                        </div>
                                        <div>
                                            <h1>Winner: </h1>
                                            <span>#{truncate(fight.winnerId)}</span>
                                        </div>
                                        <div>
                                            <h1>Loser: </h1>
                                            <span>
                                                #{truncate(fight.loserId)}
                                            </span>
                                        </div>
                                        <div>
                                            <Link to={`/profile/fight/${fight.id}`}>View Fight</Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
            </div>
        </>
    )
}

export default Fighters;