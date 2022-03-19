import React from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Navbar: React.FC = () =>{

    const user = useSelector((state:  RootStateOrAny) => state.data)
    
    const dispatch = useDispatch();

    return (
        <>
            
            
            { 
                user === undefined 
                ?
                    <Link to="/login">Login</Link>
                :
                <>
                    <Link to="/"> Home</Link>
                    <Link to="" onClick={()=> dispatch({type: 'logoutUser'})} >Logout</Link>
                </>
            }
           
        </>
    )
}


export default Navbar