"use client"
import React, { useState } from 'react'
import TextField from '@/app/components/atoms/input/TextField'
import Button from '@/app/components/atoms/button/Button'
interface Inputs{
  onRegister : (data : {
    email : string , password : string , cfpassword : string
  }) => void
}
const RegisterForm : React.FC <Inputs>= ({onRegister}) => {
  const [email , setEmail ] = useState("")
  const [password , setPassword ] = useState("")
  const [cfpassword , setCfPassword ] = useState("")
  const [error , setError] = useState <string | null > (null)
  const [success , setSuccess] = useState (false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    if( !email || !password || !cfpassword){
      setError("All field are required")
      return;
    }
    onRegister({email,password,cfpassword})
    setSuccess(true)
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <TextField type='email' placeholder='Enter your email' label='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField type='password' placeholder='Enter your password' label='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <TextField type='password' placeholder='Enter your comfirm password' label='comfirm password' value={cfpassword} onChange={(e) => setCfPassword(e.target.value)}/>
        {error && <p className='text-red-500'>{error}</p> }
        {success && <p className='text-blue-500'>Register success</p> }
        <Button type='submit'>
          Register
        </Button>
      </form>
    </>
  )
}

export default RegisterForm















































// "use client";
// // src/components/RegisterForm.tsx
// import React, { useState } from "react";
// import Button from "@/app/components/atoms/button/Button";
// interface RegisterFormProps extends HTMLElement {
//   onSubmit: (data: {
//     username: string;
//     email: string;
//     password: string;
//   }) => void;
// }

// const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     onSubmit({ username, email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label className="block mb-4" htmlFor="username" id="username">
//           Username
//         </label>
//         <input
//           className="border border-black rounded p-3"
//           aria-labelledby="username"
//           type="text"
//           id="Username"
//           placeholder="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         {/* <label className='block mb-4'>Email</label> */}
//         <label className="block mb-4" htmlFor="email" id="Email">
//           Email
//         </label>
//         <input
//           className="border border-black rounded p-3"
//           aria-labelledby="Email"
//           type="email"
//           value={email}
//           id="Email"
//           placeholder="email"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label className="block mb-4" htmlFor="password" id="password">
//           Password
//         </label>
//         <input
//           className="border border-black rounded p-3"
//           aria-labelledby="password"
//           type="password"
//           value={password}
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button
//         className="bg-blue-500 px-8 py-4 rounded text-white  mt-5"
//         type="submit"
//       >
//         Register
//       </button>
//       {/* <Button variant='contain'/> */}
//     </form>
//   );
// };

// export default RegisterForm;
