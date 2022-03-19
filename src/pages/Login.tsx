import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client'
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { LOGIN_USER } from "../graphql/user"
import { ErrorSetter } from '../interfaces/index';
import {  } from 'react-redux';

const Login: React.FC = () => {

    const data = useSelector((state:  RootStateOrAny) => state.data)
    const [errors, setError]  = useState<ErrorSetter | null>(null)
    const dispatch = useDispatch();

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}){
            dispatch({type: 'loginUser', payload: userData})
       },
       onError(err){
       setError(err.graphQLErrors[0].extensions.errors as ErrorSetter)
    },
       variables: {
           username: "user",
           password: "chicken"
       }
   })

    return (
        <div>
            {data.username}
        </div>
    )
}

export default Login