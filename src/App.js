import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/home";
import Catalog from "./components/main/catalog/catalog.component";
import CatalogPage from "./components/pages/catalog-page/catalog-page";

import Validation from "./components/pages/validation";
import RecoverPasswordPage from "./components/pages/recover-password-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/catalogPage" element={<CatalogPage />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/recoverPassword" element={<RecoverPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
