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
    let values: UserLoginInfo = {
        username:'',
        password: '',
    }
    const handleSubmit =  (data: UserLoginInfo):void => {
        values.username = data.username;
        values.password = data.password;
        loginUser();
    }
    
    const dispatch = useDispatch();

    const [loginUser, {loading, error}] = useMutation(LOGIN_USER, {

        update(_, {data: {login: userData}}){
            console.log(userData);
            
            dispatch({type: 'loginUser', payload: userData})
       },
       onError(err){
        console.log(err.graphQLErrors[0].extensions.errors );
        setError(err.graphQLErrors[0].extensions.errors as ErrorSetter)
    },
       variables: values
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