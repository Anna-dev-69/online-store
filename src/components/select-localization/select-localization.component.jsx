import { useState } from "react";
import { language } from "../main/localization/useTranslate";
import "../select-localization/select-localization.component.css";
import useStore from "../../store";

const SelectLocalization = () => {
  const [state, setState] = useState("ru");
  const setLang = useStore((s) => s.setLang);

  const handleChange = (e) => {
    setState(e.target.value);
    setLang(e.target.value);
    console.log("e.target.value", e.target.value);
  };

  return (
    <div className="SelectLocalization">
      <select
        onChange={handleChange}
        className="SelectLocalization__select"
        name=""
        id=""
        value={state}
      >
        <option key={1} value={"ru"}>
          Русский
        </option>
        <option key={2} value={"en"}>
          English
        </option>
      </select>
    </div>
  );
};

export default SelectLocalization;
