import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client'
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { LOGIN_USER } from "../graphql/user"
import { ErrorSetter } from '../interfaces/index';
import {LoginComponent} from  '../components/LoginComponent';
import { UserLoginInfo } from "../interfaces/index"



const Login: React.FC = () => {
    //const data = useSelector((state:  RootStateOrAny) => state.data)

    const [errors, setError]  = useState<ErrorSetter | null>(null)
    let variables: UserLoginInfo = {
        username:'',
        password: '',
    }
    const handleSubmit =  (values: UserLoginInfo):void => {
        variables.username = values.username;
        variables.password = values.password;
        loginUser();
    }
    
    const dispatch = useDispatch();

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}){
            dispatch({type: 'loginUser', payload: userData})
       },
       onError(err){
        setError(err.graphQLErrors[0].extensions.errors as ErrorSetter)
    },
       variables
   })

    return (
        <div>
            <LoginComponent 
                handleEvent={handleSubmit} 
            />
        </div>

    )
}

export default Login