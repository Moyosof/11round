import React, { useState } from 'react'
import styles from './Homepage.module.css'
import logo from '../../asset/logo2.jpeg'
import { createSearchParams, Link, Navigate } from 'react-router-dom'

const Homepage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const links = () =>{
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        Navigate({
            pathname: './Login',
            search: createSearchParams({
                username: username,
                password: password
            }).toString()
        })
    }

  return (
    <div className={styles.homepage}>
        <div className={styles.homebg}>
           <div className={styles.logo}>
                <img src={logo}  alt='logo'/>
                <p>
                    Welcome Sign-up to Continue ☘️
                </p>
           </div>
            <div className={styles.form}>
                <p>sign up to get 11 rounds herbs for free</p>
            <form>
                <label htmlFor=""/>First Name: <br />
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} /> <br />

                <label htmlFor=""/>Last Name: <br />
                <input type="text" onChange={(e)=>setLastName(e.target.value)} /> <br />

                <label htmlFor=""/>Username: <br />
                <input type="text" required onChange={(e)=>setUsername(e.target.value)} /> <br />

                <label htmlFor=""/>Email: <br />
                <input type="email" required onChange={(e)=>setEmail(e.target.value)} /> <br />

                <label htmlFor=""/>Password: <br />
                <input type="password" required onChange={(e)=>setPassword(e.target.value)} /> <br />


                <button className={styles.btn} onClick={links}> <Link to="/Login">SIGN UP</Link></button>
                <p >Already have an account <Link to="/Login"> <span className={styles.log}>Login</span></Link> here </p>

            </form>

            </div>

        </div>

    </div>
  )
}

export default Homepage