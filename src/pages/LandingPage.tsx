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
            <div className="landingPage">
                <Banner />
                <div className="howItWorks">
                    <HowItWorks1 />
                    <HowItWorks2 />
                    <HowItWorks3 />
                </div>
                <Roadmap />
                <EarlyAccessNft />
            </div>
        </>

    )
}

export default LandingPage