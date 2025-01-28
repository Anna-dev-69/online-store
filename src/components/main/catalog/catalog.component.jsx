import filtersGoods from "../../../data/filters-goods";
import goodsAll from "../../../data/goods-all";
import "../catalog/catalog.component.css";
import arrowBottom from "../../../assets/arrowBottom.svg";
import { Component, useEffect, useRef, useState } from "react";
// import { useStore } from "zustand";
import useStore from "../../../store";
// import Count from "../count.component/count.component";
// import cart from "../../../assets/cart.svg";
// import heart from "../../../assets/heart.svg";
import useTranslate from "../localization/useTranslate";
import Pagination from "../../pagination/pagination.component";
import GoodsForPagination from "./goods-for-pagination/goods-for-pagination.component";

const Catalog = () => {
  const [active, setActive] = useState([]);
  const [state, setState] = useState(false);
  const [styleLike, setStyleLike] = useState([]);
  const { countTotalSum, updateCartItems, cartItemsLikes, updateItemsLike } =
    useStore();

  const { t } = useTranslate();

  const [goods, setGoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [goodsPerPage] = useState(12);

  useEffect(() => {
    setGoods(goodsAll);
    console.log("goodsAll", goodsAll);
  }, []);

  const lastGoodsIndex = currentPage * goodsPerPage;
  const firstGoodsIndex = lastGoodsIndex - goodsPerPage;
  const currentGoods = goods.slice(firstGoodsIndex, lastGoodsIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /**
   *  @type {{current:HTMLUListElement}}
   */
  const ulRef = useRef(null);

  const newCart = [...goodsAll];
  const incrementTotalSum = useStore((state) => state.incrementTotalSum);
  const decrementTotalSum = useStore((state) => state.decrementTotalSum);

  const handleClickLike = (id, index) => {
    const newStyleLike = [...styleLike];
    newStyleLike[index] = !newStyleLike[index];

    if (newStyleLike[index]) {
      setState(false);
    } else {
      setState(true);
      // decrement();
    }
    updateItemsLike(id);
    setStyleLike(newStyleLike);
  };

  return (
    <div className="Catalog">
      <div className="Catalog__container">
        <div>
          <h1 style={{ fontSize: "24px", color: "#2D2D2D" }}>{t("каталог")}</h1>
        </div>
        <div className="Catalog__container-count-goods">
          <div style={{ color: "rgb(150, 150, 150)", fontSize: "14px" }}>
            Товаров{" "}
          </div>
          <div style={{ fontSize: "14px", cursor: "pointer" }}>Сбросить</div>
        </div>

        <div className="Catalog__container-filter-list">
          <ul className="Catalog__filter-list-ul">
            {filtersGoods.map((filter, index) => (
              <li key={index} className="Catalog__filter-li">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>{filter.title}</div>
                  <div>
                    <img src={arrowBottom} alt="" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <GoodsForPagination
          currentGoods={currentGoods}
          onHandleClickLike={handleClickLike}
          onUpdateCartItems={updateCartItems}
          state={state}
          styleLike={styleLike}
        />

        <Pagination
          onPaginate={paginate}
          goods={currentGoods}
          goodsPerPage={goodsPerPage}
          totalGoods={goods.length}
        />
      </div>
    </div>
  );
};

export default Catalog;
