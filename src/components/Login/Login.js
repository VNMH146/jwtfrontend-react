import React, { useState } from "react"
import './Login.scss'
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";


const Login = (props) => {
  let history = useHistory();

  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");

  const defaultObjValidInput = {
    isValidValueLogin: true,
    isValidPassword: true
  }
  const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

  const handleLogin = async () => {
    setObjValidInput(defaultObjValidInput);
    if (!valueLogin) {
      setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false });
      toast.error("Please enter email or phone number!!")
      return;
    }

    if (!password) {
      setObjValidInput({ ...defaultObjValidInput, isValidPassword: false });
      toast.error("Please enter password!!")
      return;
    }
    let response = await loginUser(valueLogin, password);
    if (response && response.data && +response.data.EC === 0) {
      //success
      let data = {
        isAuthenticated: true,
        token: 'fake token'
      }
      sessionStorage.setItem('account', JSON.stringify(data));
      history.push("/users");
    }

    if (response && response.data && +response.data.EC !== 0) {
      //error
      toast.error(response.data.EM);
    }

  }
  const handleCreateNewAccount = () => {
    history.push("/register");
  }
  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="title">vo nguyen manh huy</div>
            <div className="description">Hello World!!</div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <div className="title d-sm-none">vo nguyen manh huy</div>
            <input
              type="text"
              className={objValidInput.isValidValueLogin ? 'form-control' : 'is-invalid form-control'}
              placeholder="Email address or phone number"
              value={valueLogin}
              onChange={(event) => { setValueLogin(event.target.value) }}>

            </input>
            <input
              type="password"
              className={objValidInput.isValidPassword ? 'form-control' : 'is-invalid form-control'}
              placeholder="Password"
              value={password}
              onChange={(event) => { setPassword(event.target.value) }}>

            </input>
            <button className="btn btn-primary" onClick={() => handleLogin()}>Login</button>
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
