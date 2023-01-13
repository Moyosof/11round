import React from 'react'
import styles from './Homepage.module.css'
import logo from '../../asset/logo2.jpeg'
import { Link } from 'react-router-dom'

const Homepage = () => {
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
                <input type="text" /> <br />

                <label htmlFor=""/>Last Name: <br />
                <input type="text" /> <br />

                <label htmlFor=""/>Username: <br />
                <input type="text" required /> <br />

                <label htmlFor=""/>Email: <br />
                <input type="email" required /> <br />

                <label htmlFor=""/>Password: <br />
                <input type="password" required /> <br />


                <button className={styles.btn}> SIGN UP</button>
                <p >Already have an account <Link to="/"> <span className={styles.log}>Login</span></Link> here </p>

            </form>

            </div>

        </div>

    </div>
  )
}

export default Homepage