import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useQuery, ApolloError } from "@apollo/client";
import { useSelector, useDispatch, RootStateOrAny} from "react-redux";
import { GET_USER_NFTS } from "../../graphql/nft";

const Fighters: React.FC = () => {

    const user = useSelector((state:  RootStateOrAny) => state.data)
    const nfts = useSelector((state: RootStateOrAny) => state.nfts)
    const [errors, setErrors] = useState<ApolloError | undefined>()
    const dispatch = useDispatch();
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
                    <div onClick={()=> setInfoNft(el) }>
                      {el.id}
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

        </>
    )
}

export default Fighters;