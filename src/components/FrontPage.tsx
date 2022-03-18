import React from "react";
import { useState } from "react";
import {gql} from 'graphql-tag';
import { useMutation } from "@apollo/client";

const FrontPage: React.FC = () => {

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {

        update(_, {data: {login: userData}}){
            
        },
    
       onError(err){
           console.log(err.graphQLErrors[0].extensions.errors);
       },
    
    //    variables: values
    
    })

    return (
        <div>
            MFC-Metaverse
        </div>
    )
}


export default FrontPage

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
