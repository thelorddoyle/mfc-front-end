import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ErrorSetter } from "../interfaces/index"
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../graphql/user'
import { useNavigate } from "react-router";

type Props = {
    isForm: string;
    whichForm(): void
}

export const Login: React.FC<Props>  =  ({whichForm, isForm}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values,setValues] = useState<object | ''> ({})
    const [errors, setError]  = useState<ErrorSetter | null>(null)

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        loginUser();
    }

    const onChange = (ev:  React.ChangeEvent<HTMLInputElement>)=>{
       setValues({...values, [ev.target.name]: ev.target.value })
    }

    const [loginUser, {loading, error}] = useMutation(LOGIN_USER, {

        update(_, {data: {login: userData}}){
            console.log(userData)
            dispatch({type: 'loginUser', payload: userData})
            navigate('/');
        },
        onError(err){
            console.log(err)
            // setError(err.graphQLErrors[0].extensions.errors as ErrorSetter)
        },
        variables: values
        
   })

    return (
        
        <>
          {isForm === 'login' && 
            <div className="glass-card">
                <h1 className="form-title"> LOGIN </h1>
                <form onSubmit={handleSubmit} autoComplete="off" >
                    <div> 
                        <input type="text"  placeholder="Username" name="username" onChange={onChange}  autoComplete="off" />   
                    </div>
                    <div> 
                        <input type="password" placeholder="Password" name="password" onChange={onChange} autoComplete="off"/> 
                    </div>
                    <div>
                        <button type="submit" className="main-button" >Login</button>    
                    </div>
                    <div>
                        <h4 onClick={whichForm} >Don't have account ? Sign up</h4>      
                    </div>
                </form>
            </div>
         }
        </>
    )
}
