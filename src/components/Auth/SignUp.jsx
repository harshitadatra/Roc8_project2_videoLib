import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import {useNavigate} from "react-router-dom"


export const SignUp = () => {
    const {setUser} = useAuth();
    const navigate = useNavigate();
    const [userSignUp,setUserSignUp] =useState({
        email:"",
        password:"",
        firstName:"",
        lastName:""
    });
    const changeHandler = (e) =>
    {
        setUserSignUp((prevState)=>(
        {
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }
    const signUpClickHandler = async () => {
      try {
        const signUpData = await axios.post("/api/auth/signup", userSignUp);
        console.log(signUpData);
        setUser({
          users: signUpData.data.createdUser,
          token: signUpData.data.encodedToken,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
   
  return (
    <div>
      <div class="login-container">
        <div class="login-heading"> Sign-Up</div>
        <input
          name="firt-name"
          id="first-name"
          placeholder="Enter first name"
          onChange={(e) => changeHandler(e)}
        />
        <input
          name="last-name"
          id="last-name"
          placeholder="Enter last name"
          onChange={(e) => changeHandler(e)}
        />

        <input
          id="input-email"
          placeholder="Enter your email"
          onChange={(e) => changeHandler(e)}
        />

        <input id="input-password" placeholder="Enter Password" onChange={e => changeHandler(e)}/>

        <div class="buttons-container">
          <button class="sign-in-button" onClick={signUpClickHandler}> Sign-in</button>
        </div>
      </div>
    </div>
  );
}

 
