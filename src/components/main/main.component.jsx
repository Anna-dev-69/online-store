import "../main/main.component.css";
import MainBody from "./main-body.component/main-body.component";
import MainHeader from "./main-header.component/main-header.component";

function Main() {
  return (
    <div className="Main">
      <MainHeader />
      <MainBody />
    </div>
  );
}

export default Main;
