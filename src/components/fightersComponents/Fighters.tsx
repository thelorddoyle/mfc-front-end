import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useQuery, ApolloError } from "@apollo/client";
import { useSelector, useDispatch, RootStateOrAny} from "react-redux";
import { GET_USER_NFTS } from "../../graphql/nft";
import { useNavigate } from "react-router-dom";
import { roundTo } from "round-to";
import {  faArrowRight, faHandBackFist, faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Fighters: React.FC = () => {

    const user = useSelector((state:  RootStateOrAny) => state.data)
    const nfts = useSelector((state: RootStateOrAny) => state.nfts)
    const [errors, setErrors] = useState<ApolloError | undefined>()
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                    getUserNfts.loading ? "loading your nfts":
                    nfts?.map((el: any) => (
                        <div key={el.id} className="nft-container" onClick={()=> setInfoNft(el) }>
                            <img src={el.image} alt=""/>
                        </div>
                    ))
                }
          </div>
        </div>
        <div>
            <h1>
                Info Nft
                {infoNft.id}
            </h1>
        </div>
        <div>
            <h1>Past Results</h1>
        </div>
            {
                infoNft.fights 
                ?
                infoNft.fights?.map(function(fight: any): JSX.Element | undefined {
                    
                    // if the fight has been resolved
                    if (fight.winnerId) {
                        return (<div key={fight.id}>
                        <h2>Match {fight.id}</h2>
                        <h2>User ID: {infoNft.id === fight.winnerId ? 'You' : 'They'} won!</h2>
                        <h2>Winner: {fight.winnerId}</h2> 
                        <h2>Loser: {fight.loserId}</h2>
                        <Link to={`/profile/fight/${fight.id}`}>View Fight</Link>
                    </div>)
                    }
                })
                :
                null
            }
        </>
    )
}

export default Fighters;