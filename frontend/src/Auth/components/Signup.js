import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  const history = useHistory();

  const [signUpSucess, setSignUpSuccess] = useState(false);
  const [signUpFailure, setSignUpFailure] = useState(false);
  const [signUpFailureMsg, setSignUpFailureMsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const onLoginHandler = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: firstName.current.value,
        lname: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
    });

    if (response.ok) {
      setSignUpFailure(false);
      setSignUpSuccess(true);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    } else {
      const error = await response.text();
      console.log(error);
      setSignUpFailureMsg(error);
      setSignUpFailure(true);
    }
  };
  return (
    <>
      <div className="display_banner">
        {signUpSucess && (
          <p className="green">User registration successfully</p>
        )}
        {signUpFailure && <p className="red">{signUpFailureMsg}</p>}
      </div>
      <div className="form-wrapper">
        <div className="form form-signup">
          <h2>Create your Account</h2>
          <form action="" onSubmit={onLoginHandler}>
            <div className="form_username form_input">
              <label htmlFor="fname">First Name</label>
              <input type="text" ref={firstName} id="fname" />
            </div>
            <div className="form_username form_input">
              <label htmlFor="lname">Last Name</label>
              <input type="text" ref={lastName} id="lname" />
            </div>
            <div className="form_email form_input">
              <label htmlFor="email">Email</label>
              <input type="email" ref={email} id="email" />
            </div>
            <div className="form_password form_input">
              <label htmlFor="password">Password</label>
              <input type="password" ref={password} id="password" />
            </div>
            <div className="form_button">
              <button type="submit">sign up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
