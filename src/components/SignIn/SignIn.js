import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import lock from "./img/padlock.png";
import "./style.css"

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [emailClass, setEmailClass] = useState()
    const [pass, setPass] = useState('');
    const [passErr, setPassErr] = useState(false);
    const [passClass, setPassClass] = useState()
    const [remember, setRemember] = useState(false);


    const HashChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const HashChangePass = (event) => {
        setPass(event.target.value);
    }
    const handleInputChange = ({ target: { checked } }) => {
        setRemember(checked);
    }
    const checkEmailErr = () => {
        let reg = /.+@.+\..+/i;
            if(reg.test(email) === false) {
                setEmailErr(true);
            } else if(reg.test(email) === true) {
                setEmailErr(false);
            }
    }
    const checkPassErr = () => {
        let reg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/;
            if(reg.test(pass) === false) {
                setPassErr(true);
            } else if(reg.test(pass) === true  ) {
                setPassErr(false);
            }
    } 

    const confirmSignIn = () => {
        if(emailErr === false && passErr === false) {
            alert('Вы вошли');
        } else {
            alert('логин или пароль не правильные')
        }
    }


    useEffect(()=>{
            checkEmailErr();
            if(emailErr === true && email.length > 0) {
                setEmailClass("inputEmail error");
            } else if(emailErr === false ) {
                setEmailClass("inputEmail");
            }

            checkPassErr();
            if(passErr === true && pass.length > 0) {
                setPassClass("inputPass error");
            } else if(passErr === false) {
                setPassClass("inputPass");
            }
        }
    )

    return (
        <section className="sign">
            <div className="logo">
                <div className="imgInner">
                    <img src={lock} alt=""/>
                </div>
                <h3>Sign in</h3>
            </div>
            <div className="inputs">
                <input 
                    className={emailClass}
                    type="text" 
                    placeholder="Email Address*" 
                    value={email}
                    onChange={HashChangeEmail}
                    />
                <input 
                    className={passClass}
                    type="password" 
                    placeholder="Password*"
                    value={pass}
                    onChange={HashChangePass} />
                <div className="inputCheck">
                    <input 
                        className="custom-checkbox"
                        id="check1" 
                        type="checkbox" 
                        checked={remember} 
                        onChange={handleInputChange}/>
                    <label htmlFor="check1">Remember me</label>
                </div>
            </div>
            <button
                onClick={confirmSignIn}
            >SIGN IN</button>
            <div className="forgotPass">
                <a href="/">Forgot password?</a>
                <Link to="/signup">
                    Don't have an account? Sign Up
                </Link>
            </div>
            <div className="copyright">
                <p>Copyryght @ Your Website 2020.</p>
            </div>
        </section>
    );
}