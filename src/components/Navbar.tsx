import React from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Navbar: React.FC = () =>{

    const user = useSelector((state:  RootStateOrAny) => state.data)
    
    const dispatch = useDispatch();

    return (
        <>
             <Link to="/"> Home</Link>
            
            { 
                user === undefined 
                ?
                    <Link to="/connect">Connect</Link>
                :
                <>
                    <Link to="/profile" >Profile</Link>
                    <Link to="" onClick={()=> dispatch({type: 'logoutUser'})} >Logout</Link>
                </>
            }
           
        </>
    )
}


export default Navbar