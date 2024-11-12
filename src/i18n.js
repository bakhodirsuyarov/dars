import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        inputLabel: "Enter Data",
        submit: "Submit",
        cancel: "Cancel",
        reset: "Reset",
        delete: "Delete",
      },
    },
    fr: {
      translation: {
        inputLabel: "Entrez les données",
        submit: "Soumettre",
        cancel: "Annuler",
        reset: "Réinitialiser",
        delete: "Supprimer",
      },
    },
    es: {
      translation: {
        inputLabel: "Ingrese datos",
        submit: "Enviar",
        cancel: "Cancelar",
        reset: "Restablecer",
        delete: "Eliminar",
      },
    },
    de: {
      translation: {
        inputLabel: "Daten eingeben",
        submit: "Einreichen",
        cancel: "Abbrechen",
        reset: "Zurücksetzen",
        delete: "Löschen",
      },
    },
    // Add other languages here
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
