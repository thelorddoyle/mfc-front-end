import React, { useState } from "react";
import { ErrorSetter } from "../interfaces/index"
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from '../graphql/user'

type Props = {
    isForm: string;
    whichForm(): void
}

export const Register : React.FC  <Props> = ({whichForm,isForm}) => {

    const [values, setValues] = useState<any | ''> ({});
    const [errors, setError] = useState<ErrorSetter | null>(null)

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        registerUser()
    }

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>)=> {
        setValues({...values, [ev.target.name]: ev.target.value})
        console.log(values)
    }

    const [registerUser, {loading, data, error}] = useMutation(REGISTER_USER, {

        update(_, {data: {register: registerData}}) {
            console.log(registerData)
        },
        onError(err){
            setError(err.graphQLErrors[0].extensions.errors as ErrorSetter)
        },
        variables: values

    })

    return (
        <>
        {
        isForm === 'register' &&
            <div className="glass-card">
                <h1 className="form-title"> SIGN UP </h1>
                <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <input type="text" placeholder="Username" name="username" onChange={onChange} />
                </div>
                <div>
                    <input type="text" placeholder="Email" name="email" onChange={onChange} />  
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" onChange={onChange} /> 
                </div>
                <div>   
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={onChange} />
                </div>
                <div>
                    <button type="submit" className="main-button">Register</button> 
                </div>
                <div>
                     <h4 onClick={()=> whichForm()} >Already have account? Login</h4>           
                </div>
                </form>
            </div>
         }
        </>
    )

}

export default Register;