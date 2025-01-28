import "../password-error-notification/password-error-notification.css";

/**
 *
 * @param {string} props.title
 * @returns
 */
const PasswordErrorNotification = (props) => {
  return <div className="PasswordErrorNotification">{props.title}</div>;
};
export default PasswordErrorNotification;
