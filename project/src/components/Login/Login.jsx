import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Login.css";
//login fetch
const login = (email, password) => {
  return fetch("/login", {
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

const Login = () => {
  const navigate = useNavigate();

  const { context, setContext } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      return new Error("Please, fill in both fields");
    }
    const user = await login(email, password);
    setEmail("");
    setPassword("");
    console.log(user.email);
    setContext(user.email);
    console.log("end");
    if (user !== undefined) {
      navigate("/Notes");
    }
  };

  //handle change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div id="login">
      <h1 className="title">Login</h1>

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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
