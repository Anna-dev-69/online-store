import "../prof-and-baby.component/prof-and-baby.component.css";
import prof from "../../../assets/prof.jpg";
import baby from "../../../assets/baby.jpg";

function ProfAndBaby() {
  return (
    <div className="ProfAndBaby">
      <div className="ProfAndBaby__prof">
        <a href="">
          {" "}
          <img src={prof} alt="" />
        </a>
      </div>
      <div className="ProfAndBaby__baby">
        <a href="">
          {" "}
          <img src={baby} alt="" />
        </a>
      </div>
    </div>
  );
}

export default ProfAndBaby;
