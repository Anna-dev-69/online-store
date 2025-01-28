import "../login-error-notification/login-error-notification.component.css";

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @returns
 */
const LoginErrorNotification = (props) => {
  return <div className="LoginErrorNotification">{props.title}</div>;
};

export default LoginErrorNotification;
//Логин введен не верно!
