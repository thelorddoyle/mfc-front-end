import React, {useState} from "react"

import { useQuery, ApolloError } from "@apollo/client";
import { useSelector, useDispatch, RootStateOrAny} from "react-redux";


import { GET_USER_NFTS } from "../graphql/nft";
import Fighters from "../components/fightersComponents/Fighters"


const FightersPage: React.FC = () => {
    const user = useSelector((state:  RootStateOrAny) => state.data)
    const nfts = useSelector((state: RootStateOrAny) => state.nfts)
    const [errors, setErrors] = useState<ApolloError | undefined>()

    const dispatch = useDispatch();

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
            {
                !errors 
                
                ? 
                    <Fighters
                        user={user}
                        nfts={nfts} 
                        getUserNfts={getUserNfts}
                    />
                :
                <h1>There's has been an error</h1>
            }
            
        </>

    )
}

export default FightersPage