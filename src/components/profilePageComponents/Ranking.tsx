import React from "react";
import { truncate } from "../../helpers/utils";

interface Props{
   nft: any,
   index: any 
}


const Ranking: React.FC<Props> = ({nft, index}) =>{


    return (
        <div className={index % 2 === 0 ? 'fight-details nft' : 'fight-details nft2'} key={nft.id}>
            <div>
                <img src={nft.image} alt="" style={{"width": "50px"}}/>
            </div>
            <div>
                <h1>Rank</h1>
                <span>#{index + 1}</span>
            </div>
            <div>
                <h1>Fighter ID: </h1>
                <span>{truncate(nft.id)}</span>
            </div>
            <div>
                <h1>Owner: </h1>
                <span>{truncate(nft.user.id)}</span>
            </div>
            <div>
                <h1>Wins</h1>
                <span>{nft.wins}</span>
            </div>
            <div key={nft.id} >
                <button>View Nft</button>
            </div>
        </div>
    )
}

export default Ranking