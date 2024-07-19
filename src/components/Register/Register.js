import React from "react"
import './Register.scss'
import { useHistory } from 'react-router-dom';
const Register = (props) => {
  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
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
              <input type="text" className="form-control" placeholder="Email address"></input>
            </div>

            <div className="form-group">
              <label>Phone number:</label>
              <input type="text" className="form-control" placeholder="Phone"></input>
            </div>

            <div className="form-group">
              <label>Username:</label>
              <input type="text" className="form-control" placeholder="User name"></input>
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" placeholder="Password"></input>
            </div>

            <div className="form-group">
              <label>Re-enter password:</label>
              <input type="password" className="form-control" placeholder="Re-enter password"></input>
            </div>


            <button className="btn btn-primary">Register</button>

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
