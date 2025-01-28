import Footer from "../../footer/footer.component";
import Header from "../../header/header.component";
import Catalog from "../../main/catalog/catalog.component";
import MainBodyLeftPanel from "../../main/main-body-left-panel/main-body-left-panel.component";
import MainHeader from "../../main/main-header.component/main-header.component";

const CatalogPage = () => {
  return (
    <div>
      <Header />
      <MainHeader />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          // gap: "1.5rem",
        }}
      >
        {/* <div className="CatalogPage__body"> */}
        <MainBodyLeftPanel />

        <Catalog />
        {/* </div> */}
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;
