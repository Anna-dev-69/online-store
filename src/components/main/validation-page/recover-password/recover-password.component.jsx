import { Link } from "react-router-dom";
import "../recover-password/recover-password.component.css";

const RecoverPassword = () => {
  return (
    <div className="RecoverPassword">
      <div className="RecoverPassword__container">
        <div style={{ fontSize: "24px", color: "2D2D2D", fontWeight: "600" }}>
          Вход в кабинет покупателя{" "}
        </div>
        <form className="RecoverPassword__container-form" action="">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              opacity: "0.7",
              marginBottom: "0.3rem",
            }}
          >
            <div> Email </div>
            <div style={{ color: "red" }}>*</div>
          </div>

          <input className="RecoverPassword__container-input" type="email" />

          <div className="RecoverPassword__container-form-button">
            <Link to="/validation">
              <button className="RecoverPassword__container-form-button-restore">
                Восстановить пароль
              </button>
            </Link>

            <button className="RecoverPassword__container-form-button-remembered">
              Я вспомнил(-а) пароль!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
