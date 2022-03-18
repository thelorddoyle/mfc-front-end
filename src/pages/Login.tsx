import { useEffect } from 'react';
import { useMutation } from '@apollo/client'
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_USER } from "../graphql/user"

const Login: React.FC = () => {
    const data = useSelector((state: any) => state.data)
    const dispatch = useDispatch();
    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}){
            dispatch({type: 'loginUser', payload: userData})

            
       },
       onError(err){
        console.log(err.graphQLErrors[0].extensions.errors);
         
       },
       variables: {
           username: "user",
           password: "chicken"
       }
   })

useEffect(()=>{
    loginUser();
},[])
    return (
        <div>
            {data.username}
        </div>
    )
}

export default Login