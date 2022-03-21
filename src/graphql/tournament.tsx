import { gql } from "graphql-tag"

export const GET_ROUND = gql `
    query Query {
        getCurrentTournament {
            round
        }
    }
`

export const GET_TOURNAMENT = gql `
    query GetTournament($tournamentId: ID!) {
        getTournament(tournamentId: $tournamentId) {
            id
            fights {
                id
                tier
                fightIndex
                winnerId
                loserId
                    nfts {
                        id
                        image
                }
            }
        }
    }
`