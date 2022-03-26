import React,{ useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_INFO } from "../../graphql/user";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux"

interface Props{
    changeForm(component: string): void
}

const UpdateInfo: React.FC<Props> = ({changeForm}) => {
    
    //State for values
    const [values, setValues] = useState<object | undefined> ({});

    //Current user
    const user = useSelector((state:  RootStateOrAny) => state.data)
    const dispatch = useDispatch();
    //Getting new values 
    const onChange = (ev:  React.ChangeEvent<HTMLInputElement>)=>{
        setValues({...values, [ev.target.name]: ev.target.value })
    }

    //Capturing submit and sending to data to server
    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        updateInfo();
    }

    //Mutuation to update username or email
    const [updateInfo, {loading}] =  useMutation(UPDATE_USER_INFO,{
        update(_, {data: {updateUser: userData}}){
            dispatch({type: 'updateToken', payload: userData})
        },
        onError(err) {
            console.log(err.graphQLErrors[0].extensions.errors)
            
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
                <form onSubmit={handleSubmit}>
                    <div className="input-fields">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={onChange} />
                    </div>
                    <div className="input-fields"> 
                        <label htmlFor="usernaemailme" >Email</label>
                        <input type="text" name="email" onChange={onChange} />
                    </div>
                    <div className="input-fields input-buttons"> 
                    <button type="submit" className="secondary-button">Submit</button>
                    <button className="secondary-button" onClick={()=>changeForm('password')}>Password</button>
                    </div>
                </form>
            </div>
            <div className="overall-stats">
                overall stats
            </div>
        </div>
    )
}

export default UpdateInfo