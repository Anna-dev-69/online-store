import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import MainHeader from "../main/main-header.component/main-header.component";
import ValidationPage from "../main/validation-page/validation-page.component";

const Validation = () => {
  return (
    <div>
      <Header />
      <MainHeader />
      <main>
        <ValidationPage />
      </main>

      <Footer />
    </div>
  );
};

export default Validation;
