import Modal from "../modal/modal.component";

/**
 *
 * @param {object} props
 * @param {{title: string; price: string; imgSrc: string} | undefined} props.data
 * @param {boolean} props.isOpen
 * @param {(()=>void) | undefined} props.onClose
 * @param {(()=>void) | undefined} props.onAddGood
 * @returns
 */
const GoodsCartModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} title="Добавить в корзину">
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div>
          <img
            style={{
              width: "208px",
            }}
            src={props.data?.imgSrc}
            alt=""
          />
        </div>
        <div>
          <div style={{ fontSize: "24px", fontWeight: 600 }}>
            {props.data?.title}
          </div>
          <div
            style={{
              fontWeight: "600",
              fontSize: "22px",
              marginTop: "1rem",
            }}
          >
            {props.data?.price}
          </div>
          <div className="MainHitsCards__modal-button">
            <button
              onClick={props.onClose}
              style={{
                fontSize: "14px",
                border: "1px solid var(--bg-button)",
                color: "var(--bg-button)",
                backgroundColor: "#FFFF",
              }}
            >
              Вернуться к покупкам
            </button>
            <button
              style={{
                backgroundColor: "var(--bg-button)",
                color: "#FFFF",
                fontSize: "14px",
              }}
            >
              <a
                onClick={props.onAddGood}
                href=""
                style={{
                  textDecoration: "none",
                  color: "#FFFF",
                }}
              >
                {" "}
                Перейти в корзину
              </a>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GoodsCartModal;
