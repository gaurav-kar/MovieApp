import React, { useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

import "./SignIn.css";

const SignIn = () => {
  const auth = useContext(AuthContext);
  const email = useRef(null);
  const password = useRef(null);

  const history = useHistory();

  const onLoginHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.text())
      .then((data) => auth.setUserToken(data));

    auth.login();
    history.push("/");
  };

  return (
    <div className='form-wrapper'>
      <div className='form form-signin'>
        <h2>Welcome Back!</h2>
        <form action='' onSubmit={onLoginHandler}>
          <div className='form_email form_input'>
            <label htmlFor='email'>Email</label>
            <input type='email' ref={email} id='email' />
          </div>
          <div className='form_password form_input'>
            <label htmlFor='password'>Password</label>
            <input type='password' ref={password} id='password' />
          </div>
          <div className='form_button'>
            <button type='submit'>login</button>
          </div>
        </form>

        <div className='form__signup'>
          <p>
            <span>Don't have an account?</span>
            <Link to='/signup'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
