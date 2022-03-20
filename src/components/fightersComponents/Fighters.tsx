import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useQuery, ApolloError } from "@apollo/client";
import { useSelector, useDispatch, RootStateOrAny} from "react-redux";
import { GET_USER_NFTS } from "../../graphql/nft";
import { useNavigate } from "react-router-dom";
import HowItWorks1 from "../landingPageComponents/HowItWorks1";
import Fight from "./Fight";

const Fighters: React.FC = () => {

    const user = useSelector((state:  RootStateOrAny) => state.data)
    const nfts = useSelector((state: RootStateOrAny) => state.nfts)
    const [errors, setErrors] = useState<ApolloError | undefined>()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [infoNft, setInfoNft] = useState<any | null> ({})

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
        <Link to="/mint" > Mint More </Link> 
        <h3>Availabe Funds: {user?.amountInWallet} </h3>
        <div>
            {
                getUserNfts.loading ? "loading your nfts":
                nfts?.map((el: any) => (
                    <div key={el.id} onClick={()=> setInfoNft(el) }>
                      {el.image}
                    </div>
                ))
            }
          
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