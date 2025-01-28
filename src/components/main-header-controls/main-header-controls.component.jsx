import { Link } from "react-router-dom";
import "../main-header-controls/main-header-controls.component.css";
import Count from "../main/count.component/count.component";
import user from "../../assets/user.svg";
import like from "../../assets/like.svg";
import cart from "../../assets/cart.svg";
import ruble from "../../assets/ruble.svg";

/**
 *
 * @param {object} props
 * @param {number} props.cartItemsCount
 * @param {number} props.cartItemsSum
 * @param {number} props.cartItemsLikes
 * @returns
 */
const MainHeaderControls = (props) => {
  return (
    <div className="MainHeader__container-controls">
      <div className="MainHeader__container-controls-user">
        <Link to="/validation">
          {" "}
          <img src={user} alt=""></img>
        </Link>
      </div>
      <div style={{ position: "relative" }}>
        <Count count={props.cartItemsLikes?.size} />
        <img src={like} alt="" />
      </div>
      <div style={{ position: "relative" }}>
        <Count count={props.cartItemsCount} />
        <img src={cart} alt="" />
      </div>
      <div className="MainHeader__container-controls-count-ruble">
        <p style={{ fontSize: "1.2rem" }}> {props.cartItemsSum} </p>
        <img
          style={{ backgroundColor: "var(--filter-controls)" }}
          className="MainHeader__container-controls-ruble"
          src={ruble}
          alt=""
        />
      </div>
    </div>
  );
};

export default MainHeaderControls;
