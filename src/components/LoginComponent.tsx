import React, { useState } from "react";

interface UserLoginInfo{
    username: string;
    password: string;
}
interface Props {
    handleEvent(values :UserLoginInfo): void;
}


export const LoginComponent: React.FC<Props> = (props) => {

    const [values,setValues] = useState<object | ''> ({})
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.handleEvent(values as UserLoginInfo);
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
