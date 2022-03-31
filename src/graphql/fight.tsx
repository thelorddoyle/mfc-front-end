import { gql } from "graphql-tag"

export const GET_FIGHT = gql`
query Query($fightId: ID!) {
  getFight(fightId: $fightId) {
    id
    fightIndex
    tier
    winnerId
    loserId
    fightReplay {
      attackerId
      defenderId
      body
    }
    nfts {
      id
      image
      user {
        username
        profileImage
      }
    }
    tournament {
      id
      startDate
      status
      round
    }
  }
}
`