import React,{ useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_INFO } from "../../graphql/user";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux"

interface Props{
    changeForm(component: string): void
}

declare const window: any;

const UpdateInfo: React.FC<Props> = ({changeForm}) => {

    
    // used for cloudinary
    const cloudName = process.env.REACT_APP_CLOUD_NAME; // replace with your own cloud name
    const uploadPreset = process.env.REACT_APP_CLOUD_PRESET; // replace with your own upload preset

    //State for values
    const [values, setValues] = useState<any | ''> ({});
    
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

    const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset,
          cropping: true,
          multiple: false,
          defaultSource: "local",
          styles: {
              palette: {
                  window: "#000000",
                  sourceBg: "#000000",
                  windowBorder: "#8E9FBF",
                  tabIcon: "#FFFFFF",
                  inactiveTabIcon: "#8E9FBF",
                  menuIcons: "#2AD9FF",
                  link: "#08C0FF",
                  action: "#336BFF",
                  inProgress: "#00BFFF",
                  complete: "#33ff00",
                  error: "#EA2727",
                  textDark: "#000000",
                  textLight: "#FFFFFF"
              },
              fonts: {
                  default: null,
                  "'Space Mono', monospace": {
                      url: "https://fonts.googleapis.com/css?family=Space+Mono",
                      active: true
                  }
              }
          }
            
        }, 
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            setValues({...values, profileImage: result.info.secure_url})
          }
        }
      );
  
      function openWidget () {
          try {
              myWidget.open()
          } catch(err) {
              console.log(err)
          }
      }

    //Mutuation to update username or email or profile Image
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
        <div> 
            <form onSubmit={handleSubmit}>
                <div className="split-account">
                    <div className="glass-card-update">
                        <div className="input-fields">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" onChange={onChange} />
                        </div>
                        <div className="input-fields"> 
                            <label htmlFor="usernaemailme" >Email</label>
                            <input type="text" name="email" onChange={onChange} />
                        </div>
                    </div>

                    <div className="profileImageContainer">

                            <div className='img-container' >
                                {
                                    values.profileImage !== undefined
                                    ?
                                    <img src={values.profileImage !== undefined ? values.profileImage : null} alt="profile" style={values.profileImage !== undefined ? {height:'100px', width: '100px', border: '1px white solid', borderRadius: '10px'} : {'display':'none'}} />
                                    :
                                    <img src={user.profileImage} alt="" style={{height:'100px', width: '100px', border: '1px white solid', borderRadius: '10px'}} />
                                }
                            </div>

                            <button
                                type="button"
                                onClick={openWidget} 
                                id="upload_widget" 
                                className='cloudinary-button'>
                                {values.profileImage === undefined ? 'Upload Profile Image' : 'Change Profile Image'}
                            </button>
                    </div>
                </div>

                <div className="input-fields input-buttons"> 
                <button type="submit" className="secondary-button">Submit</button>
                <button className="secondary-button" onClick={()=>changeForm('password')}>Password</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateInfo