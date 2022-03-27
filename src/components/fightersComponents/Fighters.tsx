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
    getUserNfts: QueryResult
}

const Fighters: React.FC<Props> = ({user, nfts, getUserNfts}) => {
   
    const [infoNft, setInfoNft] = useState<any | null> ({})
    const [fightId, setFightId] = useState<any | null> ()

    const settingInfoNfts = (data: object) => {
        setInfoNft(data);
    }

    const settingFightId = (id: any) => {
        setFightId(id)
        console.log('Setting fight id: ', id)
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