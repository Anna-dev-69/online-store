import { useState } from "react";
import "../modal/modal.component.css";
import cross from "../../assets/cross.svg";
import { createPortal } from "react-dom";

const overlay = document.getElementById("overlay");

/**
 *
 * @param {object} props
 * @param {any} props.children
 * @param {(()=>void) | undefined} props.onClose
 * @param {string} props.title
 * @param {boolean} props.isOpen
 * @returns
 */
function Modal(props) {
  if (!props.isOpen) return null;
  console.log("Кнопка закрытия", props.onClose);

  return createPortal(
    <div className="Modal" onClick={props.onClose}>
      <div className="Modal__container">
        <div className="Modal__container-title">
          <div>{props.title}</div>
          {props.isOpen ? (
            <div>
              <img
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  return props.onClose;
                }}
                src={cross}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div>{props.children}</div>
        <div className="Modal__container-footer"></div>
      </div>
    </div>,
    overlay
  );
}

export default Modal;
// const ModalDecorator = (Modal) => (props) => {

//   createPortal(<Modal {...props} />, overlay);
//   return <></>;
// };

// export default ModalDecorator(Modal);
