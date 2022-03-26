import React from "react";

interface Props{
    changeForm(component: string): void
}

const UpdatePassword: React.FC<Props> = ({changeForm}) => {

    return(
        <div className="info-user">
            <div>
                <div className="input-fields">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input type="password" name="username" />
                </div>
                <div className="input-fields">
                    <label htmlFor="password">New Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="input-fields"> 
                    <label htmlFor="password">Confirm Password</label>
                    <input type="text" name="password" />
                </div>
                <div className="input-fields input-buttons"> 
                   <button className="secondary-button">Submit</button>
                   <button className="secondary-button" onClick={()=>changeForm('default')}>Username/Email</button>
                </div>
            </div>
            <div className="overall-stats">
                overall stats
            </div>
        </div>
    )
}

export default UpdatePassword