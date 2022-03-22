import React from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import '../styles/navbar.scss'


const Navbar: React.FC = () =>{

    const user = useSelector((state:  RootStateOrAny) => state.data)
    
    const dispatch = useDispatch();

    return (
        <div className="navbar">
            
            <div className="logo-mfc">
                <Link to="/" >
                    <img src="https://res.cloudinary.com/metaverse-fc/image/upload/v1647822121/Logos%20And%20Icons/MFC_White_diwtbf.png" alt="mfc_logo" />
                    </Link> 
            </div>
            <div className="nav-menu"> 
             <Link to="/"> HOME</Link>
             <Link to="/mint" >MINT</Link>   
            { 
                user === undefined 
                ?
                    <Link className="main-button" to="/connect">CONNECT</Link>
                :
                <>
                    <Link to="/profile" >PROFILE</Link>
                    <Link to="" onClick={()=> dispatch({type: 'logoutUser'})} >LOGOUT</Link>
                </>
            }
           </div>
        </div>
    )
}


export default Navbar