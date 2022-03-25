import React from "react";

const UpdateInfo: React.FC = () => {

    return(
        <div className="info-user">
            <div> 
                <div className="input-fields">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                </div>
                <div className="input-fields"> 
                    <label htmlFor="usernaemailme">Email</label>
                    <input type="text" name="email" />
                </div>
                <div className="input-fields"> 
                   <button className="secondary-button">Submit</button>
                </div>
            </div>
            <div className="overall-stats">
                overall stats
            </div>
        </div>
    )
}

export default UpdateInfo