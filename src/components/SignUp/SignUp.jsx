import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import lock from "./img/padlock.png";
import "./style.css"

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [emailClass, setEmailClass] = useState()
    const [pass, setPass] = useState('');
    const [passErr, setPassErr] = useState(false);
    const [passClass, setPassClass] = useState()
    const [remember, setRemember] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [firstNameErr, setFirstNameErr] = useState(false);
    const [firstNameClass, setFirstNameClass] = useState();
    const [secondName, setSecondName] = useState('');
    const [secondNameErr, setSecondNameErr] = useState(false);
    const [secondNameClass, setSecondNameClass] = useState();
    

    const HashChangefirstName = (event) => {
        setFirstName(event.target.value);
    }
    const HashChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const HashChangePass = (event) => {
        setPass(event.target.value);
    }
    const HashChangeSecondName = (event) => {
        setSecondName(event.target.value);
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
    const checkFirstNameErr = () => {
      let reg = /(?=.*[a-z])[a-z]{3,}/;
          if(reg.test(firstName) === false) {
              setFirstNameErr(true);
          } else if(reg.test(firstName) === true) {
              setFirstNameErr(false);
          }
    }
    const checkSecondNameErr = () => {
      let reg = /(?=.*[a-z])[a-z]{3,}/;
          if(reg.test(secondName) === false) {
              setSecondNameErr(true);
          } else if(reg.test(secondName) === true) {
              setSecondNameErr(false);
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

    const confirmSignUp = () => {
        if(emailErr === false && passErr === false && firstNameErr === false && secondNameErr === false) {
            alert('Вы зарегестрировались');
        } else {
            alert('Выввели не правильные данные')
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
            checkFirstNameErr();
            if(firstNameErr === true && firstName.length > 0) {
                setFirstNameClass("inputName error");
            } else if(firstNameErr === false ) {
              setFirstNameClass("inputName");
            }

            checkSecondNameErr();
            if(secondNameErr === true && secondName.length > 0) {
                setSecondNameClass("inputName error");
            } else if(secondNameErr === false) {
              setSecondNameClass("inputName");
            }
        }
    )

    return (
        <section className="sign">
            <div className="logo">
                <div className="imgInner">
                    <img src={lock} alt=""/>
                </div>
                <h3>Sign Up</h3>
            </div>
            <div className="inputs">
               <div className="name">
                <input 
                    className={firstNameClass}
                    type="text" 
                    placeholder="Name*" 
                    value={firstName}
                    onChange={HashChangefirstName}
                    />
                <input 
                    className={secondNameClass}
                    type="text" 
                    placeholder="Second name*"
                    value={secondName}
                    onChange={HashChangeSecondName} />
               </div>
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
                  <label htmlFor="check1">I want to receive inspiration, marketing promotions and updates via email.</label>
                </div>
            </div>
            <button
                onClick={confirmSignUp}>
                  SIGN UP
              </button>
            <div className="forgotPass">
                <Link to="/">
                    Don't have an account? Sign Up
                </Link>
            </div>
            <div className="copyright">
                <p>Copyryght @ Your Website 2020.</p>
            </div>
        </section>
    );
}