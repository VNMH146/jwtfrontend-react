import React from "react"
import './Login.scss'
import { useHistory } from 'react-router-dom';
const Login = (props) => {
  let history = useHistory();
  const handleCreateNewAccount = () => {
    history.push("/register");
  }
  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="title">vo nguyen manh huy</div>
            <div className="description">sahduashdi</div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <div className="title d-sm-none">vo nguyen manh huy</div>
            <input type="text" className="form-control" placeholder="Email address or phone number"></input>
            <input type="password" className="form-control" placeholder="Password"></input>
            <button className="btn btn-primary">Login</button>
            <span className="text-center"><a href="#" className="forgot-password">Forgot your password ?</a></span>
            <hr></hr>
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleCreateNewAccount()}>Create New Account</button>
            </div>

          </div>

        </div>
      </div>


    </div>
  )
};

export default Login;
