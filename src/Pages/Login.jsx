 import axios from 'axios';
 import React from 'react' 
 const Login = () => {
   const [user,setUser]=React.useState({
     email : '', password : ''
   })
   const signIn = async()=>{
     let res = await axios.post('http://localhost:3000/auth/login',user);
     if(res.data){ 
    localStorage.setItem('token',res?.data?.token)
     return  window.location.pathname = '/Dashboard'}
    }
   return (
     <div>
 <h1 style={{padding:'2rem'}}>Login</h1>
       <form>
         <input type='text' placeholder='email' onChange={(e)=>setUser({...user,email:e.target.value})} />
         <input type='password'placeholder='password' onChange={(e)=>setUser({...user,password:e.target.value})} />
         <button type='button' onClick={()=>signIn()}>Logn In</button>
       </form>
     </div>
   )
 }
 
 export default Login
 {/*{email:"nass222@nassfr",password:'nass'} */}