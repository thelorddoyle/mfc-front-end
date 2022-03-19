import React from "react"
import { useSelector, RootStateOrAny } from "react-redux";

const ProfileHomePage: React.FC = () => {

    const user = useSelector((state:  RootStateOrAny) => state.data)

    console.log(user)

    return (

        <>
            {
                user
                ?
                <div>
                    <h1>Hello, {user.username}</h1>
                    <h2>Eth: {user.amountInWallet}</h2>
                </div>
                :
                <h1>HELLOOO</h1>
            }
        </>

    )
}

export default ProfileHomePage;