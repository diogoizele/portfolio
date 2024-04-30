import { Languages } from "config/constants";

import * as en from "./en-us";
import * as pt from "./pr-br";

export const strings = {
  [Languages.EN]: en.strings,
  [Languages.PT]: pt.strings,
};
