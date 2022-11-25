import React from "react";
import { useState } from "react";
import Signup from "../signup/signup";
import ModalInFunc from "../modal/modal";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const handlePassword = (event) => {
    setPass(event.target.value);
    console.log(event.target.value);
  };
  const ClickLogin = () => {
    const listObj = {
      Email: email,
      Password: pass,
    };
    console.log(listObj);
    let x = false;
    for (let user of JSON.parse(localStorage.getItem("users"))) {
      if (listObj.Email === user.Email && user.Password === listObj.Password) {
        x = true;
      }
    }
    if (x) {
      localStorage.setItem("inlogg", JSON.stringify(listObj));
      navigate("/movies");
    } else {
      setModalIsOpenToTrue();
    }
  };
  return (
    <div className="loginSite">
      <h3>Login</h3>
    <div className="loginDiv">
      <input
        type="text"
        placeholder="Email"
        onChange={handleEmail}
        value={email}
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={handlePassword}
        value={pass}
      ></input>
      <button
        onClick={() => {
          ClickLogin();
        }}
      >
        Submit
      </button>
      
      <>
        {modalIsOpen && (
          <ModalInFunc
            setModalIsOpenToFalse={setModalIsOpenToFalse}
            title="try again..."
            buttotxt="go back"
          ></ModalInFunc>
        )}
      </>
    </div>
    <Signup></Signup>
    </div>
  );
};
export default Login;