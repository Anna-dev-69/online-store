import "../add-goods.component/add-goods-pop-up.component.css";
import cross from "../../../../assets/cross.svg";
import { useState } from "react";

/**
 *
 * @param {object} props
 * @param {object} props.product
 * @param {string} props.imgSrc
 * @param {string} props.title
 * @param {string} props.price
 * @returns
 */
function AddGoodsPopUp(props) {
  const [state, setState] = useState(false);

  const deleteAddGoodsPopUp = () => {
    setState((p) => !p);
  };

  return (
    <div className="AddGoodsPopUp">
      <div className="AddGoodsPopUp__container">
        <div
          style={{ backgroundColor: "rgb(247, 247, 247)", height: "70px" }}
          className="AddGoodsPopUp__title"
        >
          <div style={{ fontSize: "24px", fontWeight: "600" }}>
            Добавить в корзину
          </div>
          <div>
            <img style={{ cursor: "pointer" }} src={cross} alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src={props.imgSrc} alt="" />
          </div>
          <div>
            <div>
              <div>{props.title}</div>
              <div>{props.price}</div>
            </div>
            <div className="AddGoodsPopUp__container-button">
              <button
                onClick={deleteAddGoodsPopUp}
                style={{
                  fontSize: "14px",
                  border: "1px solid var(--bg-button)",
                  color: "var(--bg-button)",
                  backgroundColor: "#FFFF",
                }}
                type="reset"
              >
                Вернуться к покупкам
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: "var(--bg-button)",
                  color: "#FFFF",
                  fontSize: "14px",
                }}
              >
                Перейти в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGoodsPopUp;
