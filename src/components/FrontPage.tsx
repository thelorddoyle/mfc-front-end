import React, { useEffect } from "react";
import { gql } from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { useDispatch } from "react-redux";

const FrontPage: React.FC = () => {
    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}){
            //context.login(userData)
            console.log('userData');
            
       },
       onError(err){
        console.log(err);
         
       },
       variables: {
           username: "user",
           password: "chicken"
       }
   })
useEffect(()=>{
    loginUser();
},[])

    return (
        <div>
            MFC-Metaverse
        </div>
    )
}

export const LOGIN_USER = gql`
    mutation login(
        $username: String
        $password: String
    ) {
        login(
            username: "user"
            password: "password"
        ) {
            id email username createdAt token
        }
    }
`

export default FrontPage
