import { React, useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const submit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={submit}>
        <MyInput placeholder="Введите логин" type="text" />
        <MyInput placeholder="Введите пароль" type="password" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}

export default Login;
