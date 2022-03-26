//Modules/Packages
import React, {useState} from "react";
import { roundTo } from "round-to";
import { useSelector, RootStateOrAny } from "react-redux";

//Components
import UpdateInfo from "../components/profilePageComponents/UpdateInfo";
import UpdatePassword from "../components/profilePageComponents/UpdatePassword";

//Resources
import {  faArrowRight, faTrophy, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/account.scss'


const AccountPage: React.FC = () => {
    const [component, setComponent] = useState<string | "">('default')
    const changeForm = (component: string = "default") => {
        setComponent(component);
    }

    console.log(component);
    
    const switchForm = (componentName: string) => {
        switch (componentName) {
            case 'default':
                return <UpdateInfo changeForm={changeForm}/>
            case 'password':
                return <UpdatePassword changeForm={changeForm}/>
            default:
                return <UpdateInfo changeForm={changeForm}/>
        }
    }

    const user = useSelector((state: RootStateOrAny) => state.data)
    return(
        <>
            <div className="display-stats"> 
                <div className="tournaments"> 
                    <FontAwesomeIcon className="rotate-icon"  icon={faTrophy}/>
                    <h2>Speak to somebody from our team if you're stuck</h2>
                    <FontAwesomeIcon  icon={faArrowRight}/>
                </div>
                <div className="show-eth"> 
                    <FontAwesomeIcon  icon={faSackDollar}/> 
                    <div>
                        <h2>Available funds</h2>
                        <p>
                            Eth: {roundTo(user.amountInWallet, 2)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="account">
               {
                   switchForm(component)
               }
            </div>
        </>

    )
}

export default AccountPage