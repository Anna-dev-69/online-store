import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import MainHeader from "../main/main-header.component/main-header.component";
import RecoverPassword from "../main/validation-page/recover-password/recover-password.component";

const RecoverPasswordPage = () => {
  return (
    <div>
      <Header />
      <MainHeader />
      <mein>
        <RecoverPassword />
      </mein>
      <Footer />
    </div>
  );
};

export default RecoverPasswordPage;
