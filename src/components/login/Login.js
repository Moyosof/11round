import React from 'react'
import './Login.css'
import logo from '../../asset/logo2.jpeg'
import { useSearchParams } from 'react-router-dom'

const Login = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('username'));
    console.log(searchParams.get('password'));

  return (
    <div className='login'>
        <div className='login-bg'>
           <div className='logo'>
                <img src={logo}  alt='logo'/>
                <p>
                    Welcome Login to Continue ☘️
                </p>
           </div>
            <div className='form'>
                <p>Please login here</p>
            <form>
                <label htmlFor=""/>Email: <br />
                <input type="text" required/> {searchParams.get('email')} <br />

                <label htmlFor=""/>Password: <br />
                <input type="password" required /> {searchParams.get('password')} <br />


                <button className='btn'> LOGIN</button>
                <p >Forget password </p>

            </form>

            </div>

        </div>

    </div>
  )
}

export default Login