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
                    MFC-METAVERSE
                    </Link> 
            </div>
            <div className="nav-menu"> 
             <Link to="/"> Home</Link>
             <Link to="/mint" >Mint</Link>   
             <Link to="/mytournaments" >My Tournaments</Link>   
            { 
                user === undefined 
                ?
                    <Link className="main-button" to="/connect">Connect</Link>
                :
                <>
                    <Link to="/profile" >Profile</Link>
                    <Link to="" onClick={()=> dispatch({type: 'logoutUser'})} >Logout</Link>
                </>
            }
           </div>
        </div>
    )
}


export default Navbar