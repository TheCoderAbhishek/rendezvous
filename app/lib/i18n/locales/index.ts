import type { LanguageCode } from "../languages";
import type { Dictionary } from "../types";
import en from "./en";
import hi from "./hi";
import mr from "./mr";
import es from "./es";
import de from "./de";
import pt from "./pt";
import ta from "./ta";
import te from "./te";
import kn from "./kn";
import ml from "./ml";

export const DICTIONARIES: Record<LanguageCode, Dictionary> = {
  en,
  hi,
  mr,
  es,
  de,
  pt,
  ta,
  te,
  kn,
  ml,
};
