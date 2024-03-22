import React, { useState } from "react";
import passwords from "../PasswordDictionary.json";

const LoginPage = (props) => {
  const { onClose, setShowFinalPage } = props;
  const [passwordsArray, setPasswordsArray] = useState(passwords);

  const handleLogin = (e) => {
    const email = e.target[0].value;
    const password = e.target[1].value;
    let flag = false;
    for (let i = 0; i < passwordsArray.length; i++) {
      if (
        passwordsArray[i].email == email &&
        passwordsArray[i].password == password
      ) {
        flag = true;
        alert("Login Successful");
        setShowFinalPage(false);
      }
    }
    if (!flag) {
      alert("Please login with the user ID and passwords provided");
    }
  };

  const handleSignup = (e) => {
    // const email = e.target[0].value;
    // const password = e.target[1].value;
    // let temp = {
    //   email: email,
    //   password: password,
    // };
    // const updatedPasswords = [...passwordsArray, temp];
    // setPasswordsArray(updatedPasswords);
    // alert(
    //   `You can login with the passwords now!!" ${email} and ${password} in future`
    // );
    alert(`Currently you can login with the passwords provided only`);
    setTimeout(() => {
      alert(`Logged you incase you want to check upload functionality`);
    }, 2000);
    setShowFinalPage(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <div>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <a href="#">Forgot your password?</a>
          <div>
            <button type="submit">Login</button>
            <button type="button" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
