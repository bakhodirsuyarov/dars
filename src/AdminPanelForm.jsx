import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import "./i18n"; // Import the i18n configuration

const schema = yup.object().shape({
  data: yup.string().required("This field is required"),
});

const AdminPanelForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    en: "",
    fr: "",
    es: "",
    de: "",
  });

  const onSubmit = (data) => {
    console.log("Collected data:", formData);
    // handle submit logic
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, [language]: value }));
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("fr")}>French</button>
        <button onClick={() => changeLanguage("es")}>Spanish</button>
        <button onClick={() => changeLanguage("de")}>German</button>
        {/* Add buttons for other languages */}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>{t("inputLabel")}</label>
          <input
            {...register("data")}
            value={formData[language]}
            onChange={handleInputChange}
          />
          {errors.data && <p>{errors.data.message}</p>}
        </div>
        <div>
          <button type="submit">{t("submit")}</button>
          <button type="button" onClick={() => reset()}>
            {t("cancel")}
          </button>
          <button
            type="button"
            onClick={() => setFormData({ en: "", fr: "", es: "", de: "" })}
          >
            {t("reset")}
          </button>
          <button
            type="button"
            onClick={() => console.log("Delete logic here")}
          >
            {t("delete")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPanelForm;
