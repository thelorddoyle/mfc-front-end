import { gql } from "graphql-tag"

export const GET_USER_NFTS = gql`
  query GetUserNfts {
    getMyNfts {
      id
      background
      bodyType
      jewellery
      tattoos
      hairStyle
      eyeColor
      facialHair
      clothing
      shorts
      mouth
      headgear
      gloves
      bruisingOrBlood
      image
      fights {
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
      }
    }
  }
`

export const MINT_NFT = gql `
   mutation Mutation {
    mintNft {
      id
    }
  }
`
//   context: {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }