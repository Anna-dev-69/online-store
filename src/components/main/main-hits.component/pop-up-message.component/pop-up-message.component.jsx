import "../pop-up-message.component/pop-up-message.component.css";

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.isOpen
 * @returns
 */
function PopUpMessage(props) {
  if (!props.isOpen) return null;
  return (
    <div className="PopUpMessage">
      <div className="PopUpMessage__title">{props.title}</div>
    </div>
  );
}
export default PopUpMessage;
