import React from "react";

interface Props{
    changeForm(component: string): void
}

const UpdateInfo: React.FC<Props> = ({changeForm}) => {

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
                <div className="input-fields input-buttons"> 
                   <button className="secondary-button">Submit</button>
                   <button className="secondary-button" onClick={()=>changeForm('password')}>Password</button>
                </div>
            </div>
            <div className="overall-stats">
                overall stats
            </div>
        </div>
    )
}

export default UpdateInfo