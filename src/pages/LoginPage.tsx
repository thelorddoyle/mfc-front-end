import { useState } from 'react';
import {Login} from  '../components/Login';
import {Register} from  '../components/Register';

const LoginPage: React.FC = () => {
    //const data = useSelector((state:  RootStateOrAny) => state.data)
    const [isForm, setIsForm] = useState<string | ''> ('login');

    const changeForm = () => isForm === 'login' ? setIsForm('register') : setIsForm('login');

    return (
        <div>
            <Login isForm={isForm}  whichForm={changeForm} />
            <Register isForm={isForm} whichForm={changeForm} />
        </div>

    )
}

export default LoginPage