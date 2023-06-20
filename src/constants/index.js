import { fr_ca_lang, pt_br_lang, en_us_lang } from "./languages";
import { fr_ca_routes, pt_br_routes, en_us_routes } from "./routes";


export const STATENAME = process.env.REACT_APP_STATE || "amplifylogin";

export const TYPES = {
  UPDATE_LANG: "UPDATE_LANG",
  UPDATE_USER: "UPDATE_USER",
};

export const LANGUAGES = {
  "en-US": en_us_lang,
  //"pt-BR": pt_br_lang,
  "fr-CA": fr_ca_lang,
};

export const PROVINCES = {
  "qc":  "qc",
  "on":  "on",
  "bc":  "bc"
};

export const COUNTRY = {
  "CA":  "CA"
};

export const ROUTES = {
  "en-US": en_us_routes,
  //"pt-BR": pt_br_routes,
  "fr-CA": fr_ca_routes,
};
