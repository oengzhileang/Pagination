'use client'
import React, { useState } from 'react'
import TextField from '@/app/components/atoms/input/TextField'
import Button from '@/app/components/atoms/button/Button'
interface LoginFormData{
    username : string;
    password : string;
}
interface LoginFormProps{
    onSubmit : (LoginFormData : LoginFormData ) => void
}
const LoginForm : React.FC <LoginFormProps>  = ({onSubmit}) => {
    const [username ,setUsername] = useState("")
    const [password ,setPassword] = useState("")
    const [usernameError ,setUsernameError] = useState("")
    const [passwordError ,setPassworderror] = useState("")

    const handleUsernameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUsername(e.target.value)
        if(usernameError) setUsernameError("")
    }
    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
        if(passwordError) setPassworderror("")
    }
    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        let hasError = false
        if(username.trim() === ""){
            setUsernameError("Username is required")
            hasError = true;
        }
        if(password.trim() === ""){
            setPassworderror("Password is required")
            hasError = true;
        }
        if(!hasError){
            onSubmit({username , password})
        }
    }
    const handleClick = () =>{
        return "Everything is perfect"
    }
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <TextField type='text' label='username' placeholder='Enter your username' value={username} onChange={handleUsernameChange} error={usernameError}/>
            <TextField type='password' label='password' placeholder='Enter your password' value={password} onChange={handlePasswordChange} error={passwordError}/>
            <Button type='submit' variant='contain' color='primary'>
                Login
            </Button>
        </form>
    </>
  )
}

export default LoginForm
