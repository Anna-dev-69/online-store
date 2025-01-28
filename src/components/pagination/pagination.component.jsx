import { useState } from "react";
import "../pagination/pagination.component.css";

/**
 *
 * @param {object} props
 * @param {never[]} props.goods
 * @param {number}props.goodsPerPage
 * @param {number}props.totalGoods
 * @param {()=>void}props.onPaginate
 * @returns
 */
const Pagination = (props) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [isActive, setIsActive] = useState([]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalGoods / props.goodsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClickNumber = (index) => {
    const newIsActive = Array(pageNumbers.length).fill(false);
    newIsActive[index] = true;
    setIsActive(newIsActive);
  };
  //
  return (
    <div className="Catalog__container-goods-pagination">
      <div className="Catalog__pagination">
        <button
          onClick={() => {
            pageNumbers.forEach((item, index) => {
              if (item === currentNumber && currentNumber >= 2) {
                setCurrentNumber(currentNumber - 1);
                handleClickNumber(currentNumber - 2);
                return props.onPaginate(currentNumber - 1);
              }
            });
          }}
        >
          Предыдущая{" "}
        </button>
        <div className="Catalog__pagination-page">
          <ul className="Pagination__list" style={{ display: "flex" }}>
            {pageNumbers.map((item, index) => {
              return (
                <li
                  className="Pagination__list-li"
                  style={
                    isActive[index]
                      ? { backgroundColor: "rgb(113, 136, 212)" }
                      : {}
                  }
                  currentNumber={currentNumber}
                  key={item}
                >
                  <a
                    onClick={() => {
                      handleClickNumber(index);

                      return props.onPaginate(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={() => {
            pageNumbers.forEach((item, index) => {
              if (
                item === currentNumber &&
                currentNumber <= pageNumbers.length - 1
              ) {
                setCurrentNumber(currentNumber + 1);
                console.log("currentNumber", currentNumber - 1);
                console.log("index", index);
                handleClickNumber(currentNumber);
                return props.onPaginate(currentNumber + 1);
              }
            });
          }}
        >
          Следующая
        </button>
      </div>
    </div>
  );
};

export default Pagination;
