import { useState } from 'react';
import {Login} from  '../components/Login';
import {Register} from  '../components/Register';
import '../styles/loginRegister.scss'

const LoginPage: React.FC = () => {
    //const data = useSelector((state:  RootStateOrAny) => state.data)
    const [isForm, setIsForm] = useState<string | ''> ('login');

    const changeForm = () => isForm === 'login' ? setIsForm('register') : setIsForm('login');

    return (
        <div className="loginRegister">
            <Login isForm={isForm}  whichForm={changeForm} />
            <Register isForm={isForm} whichForm={changeForm} />
        </div>

    )
}

export default LoginPage