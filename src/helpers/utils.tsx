import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const truncate = (param: string, length: number = 6) => {
    return  param ? param.substring((param.length - length), param.length).toUpperCase() : "";
}

export const checkToken = () =>{
    //Check if Token hasn't expired 
if(localStorage.getItem('token')){
    //We decode token to get expiration date
        const token = localStorage.getItem('token')
        const decodeToken:any = jwtDecode(token || '{}')
        
        //If expired we remove token 
        if(Date.now() >= (decodeToken.exp * 1000)){
            localStorage.removeItem('token')
        }else{
            //We set the user state with the his information
            return { 
                ...decodeToken,
                token: token
            } ;
        }
    }
}

export const setToken = (token: string) => {
    const isToken = localStorage.getItem(token);
    if(isToken) {
        localStorage.removeItem('token');
        localStorage.setItem('token', token);
    }else{
        localStorage.setItem('token', token);
    }
}

export const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
      // scroll to the top of the browser window when changing route
      // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
  };