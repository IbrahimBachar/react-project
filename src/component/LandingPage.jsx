import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import "./style/LandingPage.css"; // Link to the embedded CSS
import LanguageSwitcher from "../LanguageSwitcher";

const LandingPage = () => {
  const { t } = useTranslation(); // Hook for translations

  return (
    <div className="landing">
      <div className="overlay">
        <div className="language-switcher-container">
          <LanguageSwitcher />
        </div>
        <div className="content">
          <h1 className="title">{t("welcome")}</h1>
          <p className="tagline">{t("tagline")}</p>
          <p className="moving-text">{t("get_started")}</p>
          <div className="buttons">
            <Link to="/signup" className="btn">
              {t("register")}
            </Link>
            <Link to="/signin" className="btn">
              {t("login")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
