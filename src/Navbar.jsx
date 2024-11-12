import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav>
        <h1>{t("navbar.title")}</h1>
        <button>{t("navbar.addService")}</button>
      </nav>
    </>
  );
};

export default Navbar;
