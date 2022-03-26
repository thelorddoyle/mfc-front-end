import { gql } from "graphql-tag"

export const GET_MY_TOURNAMENTS = gql`
    query getTournamentsForUser {
        getAllMyTournaments {
                id
                status
                round
                startDate
                fights {
                nfts {
                    id
                }
            }
        }
    }
`
export const LOGIN_USER = gql `
    mutation login(
        $username: String!
        $password: String!
    ){
        login(
            username: $username
            password: $password
        ){
            id email username token amountInWallet
        }
    }
`

export const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ){
        register( 
            registerInput: {
                    username: $username,
                    password: $password,
                    confirmPassword: $confirmPassword,
                    email: $email,
                    }
        ){
            id email username token amountInWallet
        }
    }
`
export const UPDATE_USER_INFO = gql `
    mutation updateUser(
        $username: String
        $email: String
    ){
        updateUser(
            user:{
                username: $username,
                email: $email,   
            }
        ){
            id email username token amountInWallet
        }
    }
`