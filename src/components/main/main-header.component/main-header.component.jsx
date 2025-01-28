import "../main-header.component/main-header.component.css";
import logo from "../../../assets/logo.png";
import search from "../../../assets/search.svg";

import { useState } from "react";
import meinNavigation from "../../../main-navigation-object/mein-navigation";
import MainCatalog from "../main-catalog.component/main-catalog.component";
import Count from "../count.component/count.component";

import useStore from "../../../store";
import { Link } from "react-router-dom";
import useTranslate from "../localization/useTranslate";
import CatalogBurger from "../catalog-burger/catalog-burger.component";
import MainHeaderControls from "../../main-header-controls/main-header-controls.component";

/**
 *
 * @param {object} props
 * @param {string} props.styleBurger
//  * @param {string} props.count
 * @param {()=>void} props.onClick
 * @returns
 */
function MainHeader(props) {
  const [currentStyleBurger, setCurrentStyleBurger] = useState(false);
  const [components, setComponents] = useState([]);

  const { countGoods, cartItemsById, cartItemsLikes } = useStore();

  const { t } = useTranslate();

  const cartItemsCount = Object.keys(cartItemsById).length;
  const cartItemsSum = Object.values(cartItemsById).reduce(
    (acc, item) => acc + item.item.price * item.count,
    0
  );

  const addComponent = () => {
    setComponents([...components, <MainCatalog key={components.length} />]);
  };

  const deleteComponent = () => {
    setComponents([]);
  };

  const clickBurger = () => {
    if (!currentStyleBurger) {
      setCurrentStyleBurger(true);

      addComponent();
    } else {
      setCurrentStyleBurger(false);
      deleteComponent();
    }
  };

  return (
    <div
      className="MainHeader"
      style={
        currentStyleBurger
          ? { backgroundColor: "rgba(178, 178, 178, 0.5)" }
          : {}
      }
    >
      <div className="MainHeader__container">
        <div>
          <Link to="/home">
            <img style={{ width: "130px" }} src={logo} alt="" />
          </Link>
        </div>
        <CatalogBurger
          components={components}
          currentStyleBurger={currentStyleBurger}
          onClickBurger={clickBurger}
        />

        <div className="MainHeader__container-search">
          <input
            type="text"
            placeholder={t("поиск")}
            style={{ fontSize: "1rem" }}
          />
          <button className="MainHeader__container-search-button">
            <img src={search} alt="" />
          </button>
        </div>
        <MainHeaderControls
          cartItemsCount={cartItemsCount}
          cartItemsLikes={cartItemsLikes}
          cartItemsSum={cartItemsSum}
        />

        <div></div>
      </div>
    </div>
  );
}

export default MainHeader;
