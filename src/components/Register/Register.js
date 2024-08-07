import React from "react"
import './Register.scss'
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerNewUser } from "../../services/userService"
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  }
  const [objCheckInput, setobjCheckInput] = useState(defaultValidInput);

  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  }
  useEffect(() => {
    // axios.get("http://localhost:9090/api/v1/test-api").then(data => {
    //   console.log("Check data:", data)
    // })


  }, [])

  const isValidInputs = () => {
    setobjCheckInput(defaultValidInput);
    if (!email) {
      toast.error("Email is required");
      setobjCheckInput({ ...defaultValidInput, isValidEmail: false })
      return false;
    }
    let re = /\S+@\S+\.\S+/;

    if (!re.test(email)) {
      toast.error("Please enter a valid email");
      setobjCheckInput({ ...defaultValidInput, isValidEmail: false })
      return false;
    }
    if (!phone) {
      toast.error("Phone is required");
      setobjCheckInput({ ...defaultValidInput, isValidPhone: false })
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      setobjCheckInput({ ...defaultValidInput, isValidPassword: false })
      return false;
    }
    if (password != confirmPassword) {
      toast.error("Your password is not the same");
      setobjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false })
      return false;

    }




    return true;
  }

  const handleRegister = async () => {
    //validate inputs
    let check = isValidInputs();

    if (check == true) {
      let response = await registerNewUser(email, phone, username, password);
      let serverData = response.data;
      if (+serverData.EC == 0) {
        toast.success(serverData.EM)
        history.push("/login");
      } else {
        toast.error(serverData.EM)
      }
    }


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
              <input type="text" className={objCheckInput.isValidEmail ? "form-control" : "form-control is-invalid"} placeholder="Email address"
                value={email} onChange={(event) => setEmail(event.target.value)}>
              </input>
            </div>

            <div className="form-group">
              <label>Phone number:</label>
              <input type="text" className={objCheckInput.isValidPhone ? "form-control" : "form-control is-invalid"} placeholder="Phone"
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
              <input type="password" className={objCheckInput.isValidPassword ? "form-control" : "form-control is-invalid"} placeholder="Password"
                value={(password)} onChange={(event) => setPassword(event.target.value)}></input>
            </div>

            <div className="form-group">
              <label>Re-enter password:</label>
              <input type="password" className={objCheckInput.isValidConfirmPassword ? "form-control" : "form-control is-invalid"} placeholder="Re-enter password"
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
