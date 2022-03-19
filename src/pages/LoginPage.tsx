import {Login} from  '../components/Login';
import {Register} from  '../components/Register';

const LoginPage: React.FC = () => {
    //const data = useSelector((state:  RootStateOrAny) => state.data)

    return (
        <div>
            <Login />
            <Register />
        </div>

    )
}

export default LoginPage