import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAouth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAouth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
