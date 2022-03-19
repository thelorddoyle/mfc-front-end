import { gql } from "graphql-tag"

export const LOGIN_USER = gql `
    mutation login(
        $username: String!
        $password: String!
    ){
        login(
            username: $username
            password: $password
        ){
            id email username createdAt token
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
            id username email
        }
    }
`