import React from "react"
import './Register.scss'
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  }
  useEffect(() => {
    axios.get("http://localhost:9090/api/test-api").then(data => {
      console.log("Check data:", data)
    })
  }, [])

  const isValidInputs = () => {
    if (!email) {
      toast.error("Email is required");
      return false;
    }
    if (!phone) {
      toast.error("Phone is required");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    if (password != confirmPassword) {
      toast.error("Your password is not the same");
      return false;

    }

    let re = /\S+@\S+\.\S+/;

    if (!re.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }


    return true;
  }

  const handleRegister = () => {

    let check = isValidInputs();
    let userData = { email, phone, username, password }
    console.log("check data:", userData);
  }
  return (
    <div className="register-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="title">vo nguyen manh huy</div>
            <div className="description">sahduashdi</div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <div className="title d-sm-none">vo nguyen manh huy</div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" placeholder="Email address"
                value={email} onChange={(event) => setEmail(event.target.value)}>
              </input>
            </div>

            <div className="form-group">
              <label>Phone number:</label>
              <input type="text" className="form-control" placeholder="Phone"
                value={phone} onChange={(event) => setPhone(event.target.value)}>

              </input>
            </div>

            <div className="form-group">
              <label>Username:</label>
              <input type="text" className="form-control" placeholder="User name"
                value={(username)} onChange={(event) => setUsername(event.target.value)}></input>
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" placeholder="Password"
                value={(password)} onChange={(event) => setPassword(event.target.value)}></input>
            </div>

            <div className="form-group">
              <label>Re-enter password:</label>
              <input type="password" className="form-control" placeholder="Re-enter password"
                value={(confirmPassword)} onChange={(event) => setConfirmPassword(event.target.value)}></input>
            </div>


            <button className="btn btn-primary" onClick={() => handleRegister()}>Register</button>

            <hr></hr>
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleLogin()}>
                Already've an account
              </button>
            </div>

          </div>

        </div>
      </div>


    </div>
  )
};

export default Register;
