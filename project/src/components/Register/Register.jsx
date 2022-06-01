import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

//registration fetch
const registration = (email, password) => {
  return fetch("/register", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return new Error("fetch wasn't successfull");
  });
};

const Register = () => {
  const navigate = useNavigate();
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  //handle submiting the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      return new Error("Please, fill in both fields");
    }
    if (password !== passwordAgain) {
      return new Error("Passwords do not match");
    }
    await registration(email, password);
    setEmail("");
    setPassword("");
    setPasswordAgain("");
    console.log("end");
    navigate("/Login");
  };

  //handle changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordChangeAgain = (event) => {
    setPasswordAgain(event.target.value);
  };

  return (
    <div id="register">
      <h1 className="title">Register</h1>

      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="email"
          placeholder="apiwars@apiwars.com"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <input
          type="password"
          placeholder="password again"
          value={passwordAgain}
          onChange={handlePasswordChangeAgain}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
