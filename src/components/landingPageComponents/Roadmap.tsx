import React from "react"
import '../../styles/Temp.css'

const Roadmap: React.FC = () => {

    return (
        <div className="roadmap">
        
            <button className="main-button landing-page-button">Roadmap</button>
            <h2>An outlook into the future of the promotion</h2>

            {/* Roadmap two columns */}
            <div className="two-column-roadmap-grid">

                <div className="roadmap-grid-column">

                    <h4>Season 1: Genesis</h4>
                        <p>Over 1,000 Eth to be distributed in prizes, fighters will participate in up to 10 tournaments with a max prize of 0.75 Eth per tournament</p>

                    <h4>Season 2: End of an Era</h4>
                        <p>To enter in to season 2 you must own a Genesis fighter. Each holder will be able to mint a contract to participate.</p>

                    <h4>Season 3: The future</h4>
                        <p>All Genesis fighter holders will participate in Season 3. Season 3 will be an integrated game on our launchpad and provide customisable fights.</p>

                </div>

                <div className="roadmap-grid-column" >

                    <h4>Season 1: Exhibition</h4>
                        <p>At the end of Season 1 we will host a 20 Eth prize tournament for all holders. We will offer a further 50 Eth through exhibition tournaments.</p>

                    <h4>Season 2: Exhibition</h4>
                        <p>At the end of Season 2 we will host a 30 Eth tournament for all holders. We will offer 70 Eth through exhibition tournaments.</p>

                    <h4>Ongoing Exhibition</h4>
                        <p>From Season 3 onwards, 60% of all revenue from MFC will go towards free exhibition tournaments with a variety of prizes and tournament sizes.</p>

                </div>

            </div>

        </div>

    )
}

export default Roadmap;