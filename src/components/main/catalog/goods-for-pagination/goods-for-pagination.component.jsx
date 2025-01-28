import "../goods-for-pagination/goods-for-pagination.component.css";
import cart from "../../../../assets/cart.svg";
import heart from "../../../../assets/heart.svg";

/**
 *
 * @param {object} props
 * @param {object} props.state
 * @param {any[]} props.currentGoods
 * @param {()=>void} props.onUpdateCartItems
 * @param {()=>void} props.onHandleClickLike
 * @param {any}props.styleLike
 * @returns
 */
const GoodsForPagination = (props) => {
  return (
    <div className="Catalog__container-goods">
      <ul className="Catalog__container-goods-ul">
        {props.currentGoods?.map((good, index) => (
          <li className="Catalog__container-goods-ul-li" key={good.id}>
            <div className="Catalog__goods-ul-li-container">
              <div
                className="Catalog__container-goods-img"
                style={{ position: "relative" }}
              >
                <div
                  style={{ position: "absolute", top: "0", right: "0" }}
                  className="Catalog__container-goods-like"
                >
                  <img
                    state={props.state}
                    onClick={() => props.onHandleClickLike(good.id, index)}
                    style={
                      props.styleLike[index]
                        ? {
                            filter: "var(--filter-like)",
                            width: "20px",
                          }
                        : { backgroundColor: "", width: "20px" }
                    }
                    src={heart}
                    alt=""
                  />
                </div>

                <img style={{ height: "251px" }} src={good.imgSrc} alt="" />
              </div>
              <div className="Catalog__container-goods-price-cart-title">
                <div className="Catalog__container-goods-title">
                  {good.title}
                </div>
                <div className="Catalog__container-goods-price-cart">
                  <div>
                    <div
                      style={{
                        fontSize: "18px",
                        color: "#2D2D2D",
                        fontWeight: "500",
                      }}
                    >
                      {good.price} р
                    </div>
                  </div>
                  <div
                    state={props.state}
                    onClick={() => props.onUpdateCartItems(good)}
                    style={{
                      borderRadius: "50%",
                      // backgroundColor: "var(--bg-button)",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      src={cart}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoodsForPagination;
