import React, { useState } from 'react';
import { useAuth } from '../../context/auth-context';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
    const { setUser } = useAuth();
    const [userDetail,setUserDetail] = useState({email:"",password:""})
    const changeHandler = (e) => 
    {
        setUserDetail((previousState) =>({
          ...previousState,
          [e.target.name] : e.target.value
        }))

    }
    const loginHandler = async () => 
    {
        console.log("login");
        console.log(userDetail);
        try{
            const loginData = await axios.post(
                "/api/auth/login",userDetail
            ) 
            console.log(loginData);
             setUser({
               users: loginData.data.foundUser,
               token: loginData.data.encodedToken,
             });
            navigate("/")
        }
        catch(error)
        {
            console.log(error.response.data);
        }

    }

  return (
    <div>
      <div className="login-header-container">
        <div className="login-title"> Welcome to music jungle</div>
        <div className="login-subtitle"> Please login to continue</div>
      </div>
      <div className="login-container">
        <div className="login-heading"> Login</div>

        <input
          name="email"
          className="input-email"
          value={userDetail.email}
          type="email"
          placeholder="Enter your email"
          onChange={(e) => changeHandler(e)}
        />

        <input
          name="password"
          className="input-password"
          value={userDetail.password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => changeHandler(e)}
        />

        <div className="buttons-container">
          <button className="login-button" onClick={loginHandler}>
            Login
          </button>
          <Link to="/signup" >
            <button className="sign-up-button">New User?Sign-up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


