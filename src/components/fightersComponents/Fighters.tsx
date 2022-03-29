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
    settingFightId:(id: string)=> void,
    fightId: string,
}

const Fighters: React.FC<Props> = ({user, nfts, getUserNfts, settingFightId, fightId}) => {
   
    const [infoNft, setInfoNft] = useState<any | null> ({})

    const settingInfoNfts = (data: object) => {
        setInfoNft(data);
    }

    return (
        <>
            {
            (fightId)
            ?
            <Fight fightId={fightId} settingFightId={settingFightId} />
            :
            <>
                <ShowNfts  nfts={nfts} getUserNfts={getUserNfts} settingInfoNfts={settingInfoNfts} />
                <ShowInfoNft infoNft={infoNft} user={user}/>
                <ShowFightsNft infoNft={infoNft} settingFightId={settingFightId} />
            </>
            }
        </>
    )
}

export default Fighters;