import React,{ useState } from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { UPDATE_USER_PASSWORD } from "../../graphql/user"
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

interface Props{
    changeForm(component: string): void
}

const UpdatePassword: React.FC<Props> = ({changeForm}) => {

    const [values, setValues] = useState<object | null>({});
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<ApolloError| null>(null);
    const user = useSelector((state: RootStateOrAny) => state.data);

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [ev.target.name]: ev.target.value })
    }
    
    const handleSubmit = (ev: React.FormEvent)=> {
        ev.preventDefault();
        userPassword();
    }

    const [userPassword, {loading}] = useMutation(UPDATE_USER_PASSWORD,{
        update(data){
            dispatch({type: 'logoutUser'})
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.errors as ApolloError)
        },
        variables: values,
        context:{
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }
    })
    
    return(
        <div className="info-user">
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="input-fields">
                        <label htmlFor="currentPassword">Current Password</label>
                        <input type="password" name="currentPassword" onChange={onChange} />
                    </div>
                    <div className="input-fields">
                        <label htmlFor="password">New Password</label>
                        <input type="password" name="password"onChange={onChange}/>
                    </div>
                    <div className="input-fields"> 
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" onChange={onChange} />
                    </div>
                    <div className="input-fields input-buttons"> 
                    <button type="submit" className="secondary-button">Submit</button>
                    <button className="secondary-button" onClick={()=>changeForm('default')}>Username/Email</button>
                    </div>
                </form>
            </div>
            <div className="overall-stats">
                overall stats
            </div>
        </div>
    )
}

export default UpdatePassword