import { gql } from "graphql-tag"

export const MINT_NFT = gql `
   mutation Mutation {
    mintNft {
      id
    }
  }
`

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
    }
}

`


//   context: {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }