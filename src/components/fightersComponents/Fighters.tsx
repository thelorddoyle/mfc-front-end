import React, { useState } from "react" 

import { RootStateOrAny } from "react-redux"

import { QueryResult } from "@apollo/client";

import ShowNfts from "./ShowNfts";
import ShowInfoNft from "./ShowInfoNft";
import ShowFightsNft from "./ShowFightsNft";
import Fight from './Fight'

interface Props{
    user: RootStateOrAny,
    nfts: Array<[]>,
    getUserNfts: QueryResult,
}

const Fighters: React.FC<Props> = ({user, nfts, getUserNfts}) => {
   
    const [infoNft, setInfoNft] = useState<any | null> ({})

    const settingInfoNfts = (data: object) => {
        setInfoNft(data);
    }

    return (
        <>
            <ShowNfts  nfts={nfts} getUserNfts={getUserNfts} settingInfoNfts={settingInfoNfts} />
            <ShowInfoNft infoNft={infoNft} user={user}/>
            <ShowFightsNft infoNft={infoNft} />
                
        </>
    )
}

export default Fighters;