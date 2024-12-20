import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Al-Shifa Clinic",
      sign_in: "Sign In",
      sign_up: "Sign Up",
      no_account: "Don't have an account?",
      username: "Username",
      password: "Password",
      login_google: "Sign in with Google",
      login_github: "Sign in with GitHub",
      forgot_password: "Forgot Password?",
      create_account: "Create an Account",
      full_name: "Full Name",
      email: "Email",
      dob: "Date of Birth",
      telephone: "Phone Number",
      confirm_pwd: "Confirm Password",
      admin: "Admin",
      patient: "Patient",
      doctor: "Doctor",
      have_account: "Already have an account?",
      tagline: "Your health, our priority.",
      get_started: "Get started",
      register: "Register",
      login: "Login"
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue à la clinique Al-Shifa",
      sign_in: "Se connecter",
      sign_up: "S'inscrire",
      no_account: "Vous n'avez pas de compte ?",
      username: "Nom d'utilisateur",
      password: "Mot de passe",
      login_google: "Se connecter avec Google",
      login_github: "Se connecter avec GitHub",
      forgot_password: "Mot de passe oublié?",
      create_account: "Créer un compte",
      full_name: "Nom et prénom",
      email: "E-mail",
      dob: "Date de Naissance",
      telephone: "Numéro de Téléphone",
      confirm_pwd: "Confirmez le mot de passe",
      admin: "Administrateur",
      patient: "Patient",
      doctor: "Docteur",
      have_account: "Vous avez déjà un compte?",
      tagline: "Votre santé, notre priorité.",
      get_started: "Commencer",
      register: "S'inscrire",
      login: "Se connecter",
      
    },
  },
};

// Initialize i18n
i18n
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Bind i18n to React
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React handles escaping by default
    },
  });

export default i18n;
