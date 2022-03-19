import React, { useState } from "react";





export const LoginComponent: React.FC = () => {

    const [values,setValues] = useState<object | ''> ({})


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const onChange = (ev:  React.ChangeEvent<HTMLInputElement>)=>{
       setValues({...values, [ev.target.name]: ev.target.value })
    }   

    return (
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" onChange={onChange} />  
            <input type="password" placeholder="Password" name="password" onChange={onChange} /> 
            <button type="submit">Login</button>           
         </form>
        </>
    )

}
