import React, { useState } from "react";
import { ErrorSetter } from "../interfaces/index"
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from '../graphql/user'

export const Register = () => {

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
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" onChange={onChange} />
            <input type="text" placeholder="Email" name="email" onChange={onChange} />  
            <input type="password" placeholder="Password" name="password" onChange={onChange} /> 
            <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={onChange} />
            <button type="submit">Register</button>           
         </form>
        </>
    )

}

export default Register;