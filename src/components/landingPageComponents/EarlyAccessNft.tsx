import React from "react"
import '../../styles/Temp.css'

const EarlyAccessNft: React.FC = () => {

    return (
        <div className="earlyAccess">
        
            <button className="main-button landing-page-button">EARLY BIRD</button>

            <h2>Join our early access list to claim a free NFT</h2>
            <p>Subscribe to our email list, follow us on Twitter & join our Discord to get your hands on our free early access NFT fighter cards.</p>

            <form action="" className="subscribeButton">
                <input type="text" className="subscribeInput"/>
                <button type="submit" className="subscribeButton">Subscribe</button>
            </form>

            <div>
                <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822235/NFTs/MFC_BronzeTierv3_ydfm0e.png" alt="bronze" className="freeNftImage"/>
                <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822286/NFTs/MFC_SilverTier_olgmda.png" alt="silver" className="freeNftImage" />
                <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822251/NFTs/MFC_GoldTier_glvxby.png" alt="gold free nft" className="freeNftImage" />
                <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822268/NFTs/MFC_PlatinumTier_nifnth.png" alt="platinum free nft" className="freeNftImage" />
            </div>

        </div>

    )
}

export default EarlyAccessNft;