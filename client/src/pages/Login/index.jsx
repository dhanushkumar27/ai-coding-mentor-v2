import {useState} from 'react'

import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import './index.css'


const Login = () =>{
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorFound, setErrorFound] = useState(false)
    const [errorText, setErrorText] = useState("")

    if(Cookies.get("jwtToken")){
        return <Navigate to="/" replace/>
    }

   

    const onSubmitLoginForm = async (event) =>{
        event.preventDefault()
        const userDetails = {username,password}

        const api = "https://dummyjson.com/auth/login"

        const option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(userDetails)
        }

        const response = await fetch(api, option)
        const data = await response.json()
  
        if(response.ok){
            const token = data.accessToken
            Cookies.set('jwtToken', token,{expires:30})
            navigate('/' , {replace:true})
        }else{
            setErrorFound(true)
            setErrorText(data.message)
        }
    }

    return(
        <div className='page-container'>
            <div className='body-container'>
                <form className="login-form" onSubmit={onSubmitLoginForm}>
                    <h1 className='login-heading'>Login</h1>
                    <label>Username</label>
                    <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit">Login</button>
                    {errorFound && <p>{errorText}</p>}
                </form>
                
            </div>
        </div>
        
    )
}

export default Login