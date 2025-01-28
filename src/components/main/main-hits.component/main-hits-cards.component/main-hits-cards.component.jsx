import { Children, useEffect, useState } from "react";
import "../main-hits-cards.component/main-hits-cards.component.css";
import PopUpMessage from "../pop-up-message.component/pop-up-message.component";
// import { useStore } from "zustand";
import useStore from "../../../../store";
import AddGoodsPopUp from "../add-goods.component/add-goods-pop-up.component";
import Modal from "../../../modal/modal.component";
import { createPortal } from "react-dom";
import Goods from "../main-hits.component";
import GoodsCartModal from "../../../modals/goods-cart-modal.component";
// import mainHitsCards from "../main-hits.cards";

/**
 *
 * @param {object} props
 * @param {any[]} props.items
 * @returns
 */
function MainHitsCards(props) {
  const [styleLike, setStyleLike] = useState([]);
  const [components, setComponents] = useState([]);
  const [componentAdded, setComponentAdded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [addGoodsComponents, setAddGoodsComponents] = useState([]);
  const [modalData, setModalData] = useState();

  const [styleButton, setStyleButton] = useState(false);

  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  const changeStyle = (index) => {
    const newLikes = [...styleLike];
    newLikes[index] = !newLikes[index];

    if (newLikes[index]) {
      increment();
    } else {
      decrement();
    }

    setStyleLike(newLikes);
  };

  const openModal = (item) => {
    setIsOpen(true);
    setModalData(item);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addComponent = (index) => {};

  const addGoods = () => {
    if (!styleButton) {
    } else {
    }
  };

  console.log("styleButton", styleButton);
  return (
    <>
      <div className="MainHitsCards">
        <ul className="MainHitsCards__ul">
          {props.items.map((item, index) => (
            <li key={item.href} className="MainHitsCards__ul-li">
              <div className="MainHitsCards__container-img">
                <div
                  className="MainHitsCards__like"
                  onClick={() => changeStyle(index)}
                  style={
                    styleLike[index] ? { filter: "var(--filter-like)" } : {}
                  }
                >
                  <img
                    style={{ position: "relative" }}
                    onClick={() => addComponent(index)}
                    src={item.like}
                    alt=""
                  />
                </div>
                {isOpen && components.map((component) => component)}
                <div className="MainHitsCards__img">
                  <img
                    style={{
                      width: "208px",
                    }}
                    src={item.imgSrc}
                    alt=""
                  />
                </div>
              </div>

              <div className="MainHitsCards__title">{item.title}</div>
              <div className="MainHitsCards__price">
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "22px",
                    marginTop: "1rem",
                  }}
                >
                  {item.price}
                </div>
                <div>
                  <button
                    onClick={() => openModal(item)}
                    className="MainHitsCards__button"
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <GoodsCartModal isOpen={isOpen} onClose={closeModal} data={modalData} />
    </>
  );
}

export default MainHitsCards;
