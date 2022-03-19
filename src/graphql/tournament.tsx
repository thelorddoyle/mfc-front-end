import { gql } from "graphql-tag"

export const GET_ROUND = gql `
    query Query {
        getCurrentTournament {
        round
    }
}
`