import React from "react";
import { Link } from "react-router-dom";


const Footer: React.FC = () =>{

    return (
        <div className="footer">

            <div className="footer-grid">
                <div className="footer-grid-column-left">
                    <Link to="/" >
                    <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822121/Logos%20And%20Icons/MFC_White_diwtbf.png" alt="mfc_logo" className="logo-mfc" />
                    </Link>
                </div>
                <div className="footer-grid-column-right">

                    <div className="footer-social-grid">

                        <div className="footer-social-grid-left-column">
                            <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822391/Logos%20And%20Icons/twitterwhite_uro1mm.png" alt="twitter" className="footer-social-logo"/>
                        </div>

                        <div className="footer-social-grid-right-column">
                            <p>Twitter</p>
                        </div>

                        <div className="footer-social-grid-left-column">
                            <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822193/Logos%20And%20Icons/discordwhite_ipx15t.png" alt="discord" className="footer-social-logo"/>
                        </div>

                        <div className="footer-social-grid-right-column">
                            <p>Discord</p>
                        </div>

                        <div className="footer-social-grid-left-column">
                            <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822325/Logos%20And%20Icons/Opensea_vool3l.png" alt="opensea" className="footer-social-logo"/>
                        </div>

                        <div className="footer-social-grid-right-column">
                            <p>OpenSea</p>
                        </div>


                    </div>

                </div>
            </div>

            <div className="footer-details">
                <p>Copyright © 2022 MFC. All rights reserved.</p>
            </div>
            
        </div>
    )
}


export default Footer