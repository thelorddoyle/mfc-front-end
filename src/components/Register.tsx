import React, { useState } from "react";
import { ErrorSetter } from "../interfaces/index"
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from '../graphql/user'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

declare const window: any;

type Props = {
    isForm: string;
    whichForm(): void
}

export const Register : React.FC  <Props> = ({whichForm,isForm}) => {

    const cloudName = process.env.REACT_APP_CLOUD_NAME; // replace with your own cloud name
    const uploadPreset = process.env.REACT_APP_CLOUD_PRESET; // replace with your own upload preset

    const [values, setValues] = useState<any | ''> ({});
    const [errors, setError] = useState<ErrorSetter | null>(null)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        try {
            registerUser();
        } catch (err: any) {
            setError(err)
        }
    }

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>)=> {
        setValues({...values, [ev.target.name]: ev.target.value})
    }

    const [registerUser, {loading, data, error}] = useMutation(REGISTER_USER, {

        update(_, {data: {register: registerData}}) {
            dispatch({type: 'loginUser', payload: registerData})
            navigate('/profile');
        },
        onError(err){
            setError(err.graphQLErrors[0].extensions.errors as ErrorSetter)
        },
        variables: values

    })

    const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset,
        },
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            setValues({...values, profileImage: result.info.secure_url})
          }
        }
      );
  
      function openWidget () {
          console.log('Widget opening')
          try {
              myWidget.open()
          } catch(err) {
              console.log(err)
          }
      }

    return (
        <>
        {
        isForm === 'register' &&
            <div className="glass-card">

                <h1 className="form-title"> SIGN UP </h1>

                <form onSubmit={handleSubmit} autoComplete="off">

                    <div>
                        <input type="text" placeholder="Username" name="username" onChange={onChange} />
                    </div>

                    <div>
                        <input type="text" placeholder="Email" name="email" onChange={onChange} />  
                    </div>

                    <div>
                        <input type="password" placeholder="Password" name="password" onChange={onChange} /> 
                    </div>
                
                    <div>   
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={onChange} />
                    </div>

                    <div>
                        <div className='img-container' >
                            <img src={values.profileImage !== undefined ? values.profileImage : null} alt="profile" style={values.profileImage !== undefined ? {'width':'100px'} : {'display':'none'}} />
                        </div>

                        <button
                            type="button"
                            onClick={openWidget} 
                            id="upload_widget" 
                            className='cloudinary-button'>
                            {values.profileImage === undefined ? 'Upload Profile Image' : 'Change Profile Image'}
                        </button>
                    </div>
                    
                    <div>
                        <button type="submit" className="main-button">Register</button> 
                    </div>

                    <div>
                        <h4 onClick={()=> whichForm()} >Already have account? Login</h4>           
                    </div>

                </form>
               
            </div>
        
         }
        </>
    )

}

export default Register;