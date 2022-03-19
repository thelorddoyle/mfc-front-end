import { gql } from "graphql-tag"

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