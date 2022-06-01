import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Notes from "./components/Notes/Notes";
import Register from "./components/Register/Register";
import ErrorUrl from "./components/ErrorUrl/ErrorUrl";
import Login from "./components/Login/Login";
import Logout from "./components/Logout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./components/UserContext/UserContext";

import "./App.css";
import { useState } from "react";

function App() {
  const [context, setContext] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ context, setContext }}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="Logout" element={<Logout />}></Route>
            <Route path="Register" element={<Register />}></Route>
            <Route path="Account" element={<Home />}></Route>
            <Route path="Notes" element={<Notes />}></Route>
            <Route path="*" element={<ErrorUrl />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
