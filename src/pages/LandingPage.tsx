import React from "react"
import Banner from "../components/landingPageComponents/Banner"
import HowItWorks1 from "../components/landingPageComponents/HowItWorks1"
import HowItWorks2 from "../components/landingPageComponents/HowItWorks2"
import HowItWorks3 from "../components/landingPageComponents/HowItWorks3"
import Roadmap from "../components/landingPageComponents/Roadmap"
import EarlyAccessNft from "../components/landingPageComponents/EarlyAccessNft"
import '../styles/landingpage.scss'


const LandingPage: React.FC = () => {

    return (
        <>
            
            <Banner />
            <HowItWorks1 />
            <HowItWorks2 />
            <HowItWorks3 />
            <Roadmap />
            <EarlyAccessNft />

        </>

    )
}

export default LandingPage