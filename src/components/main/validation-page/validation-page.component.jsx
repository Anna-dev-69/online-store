import { useRef, useState } from "react";
import "../validation-page/validation-page.component.css";
import {
  REG_EXP_EMAIL,
  REG_EXP_PASSWORD,
  REG_EXP_TEL,
} from "../../../constants/reg-exp.constants";
import { Link } from "react-router-dom";
import ErrorNotification from "./error-notification/error-notification.component";
import LoginErrorNotification from "./login-error-notification/login-error-notification.component";
import PasswordErrorNotification from "./password-error-notification/password-error-notification";

const ValidationPage = () => {
  const [isValidLogin, setIsValidLogin] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);

  const [contentError, setContentError] = useState([]);
  const [loginError, setLoginError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  const handleChange = (e, prop) => {
    setFormData({
      ...formData,
      [prop]: e.target.value,
    });
    setLoginError([]);

    if (
      REG_EXP_TEL.test(formData.login) ||
      REG_EXP_EMAIL.test(formData.login)
    ) {
      setIsValidLogin(false);

      console.log("Логин введен верно");
    } else {
      setIsValidLogin(true);
      setLoginError((prev) => [
        ...prev,
        <LoginErrorNotification title="Логин введен неверно!" />,
      ]);
      console.log("Логин введен неверно");
    }

    setPasswordError([]);

    if (REG_EXP_PASSWORD.test(formData.password)) {
      setIsValidPassword(false);
      console.log("Пароль введен верно");
    } else {
      setIsValidPassword(true);
      setPasswordError((prev) => [
        ...prev,
        <PasswordErrorNotification title="Пароль введен неверно!" />,
      ]);
      console.log("Пароль введен неверно!");
    }

    console.log("formData.login", formData.login);
    setContentError([]);

    if (!formData.login || !formData.password) {
      setContentError((prev) => [...prev, <ErrorNotification />]);
    }
  };

  return (
    <div className="ValidationPage">
      <div className="ValidationPage__container">
        <form
          onSubmit={handleSubmit}
          className="ValidationPage__form"
          action=""
        >
          <div style={{ fontSize: "24px", color: "2D2D2D", fontWeight: "600" }}>
            Вход в кабинет покупателя
          </div>

          <div className="ValidationPage__form-container">
            {contentError.map((content) => content)}
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                opacity: "0.7",
                marginTop: "1rem",
              }}
            >
              <div>Телефон или Email </div>
              <div style={{ color: "red" }}>*</div>
            </div>
            {loginError}
            <input
              key={"login"}
              className="ValidationPage__form-login"
              onChange={(e) => handleChange(e, "login")}
              value={formData.login}
              style={
                isValidLogin
                  ? { border: "1px solid red" }
                  : { border: "1px solid green" }
              }
              type="text"
            />
          </div>

          <div>
            <div
              style={{
                marginTop: ".5rem",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                opacity: "0.7",
              }}
            >
              <div> Пароль</div>
              <div style={{ color: "red" }}>*</div>
            </div>
            {passwordError}
            <input
              key={"password"}
              onChange={(e) => handleChange(e, "password")}
              className="ValidationPage__form-password"
              value={formData.password}
              style={
                isValidPassword
                  ? { border: "1px solid red" }
                  : { border: "1px solid green" }
              }
              type="password"
            />
          </div>
          <div className="ValidationPage__button-container">
            <button
              onClick={handleSubmit}
              className="ValidationPage__button-entrance"
            >
              Войти
            </button>
            <Link to="/recoverPassword">
              <button className="ValidationPage__button">
                Восстановить пароль
              </button>
            </Link>

            <button className="ValidationPage__button">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ValidationPage;
