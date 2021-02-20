import { ButtonTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.primary,
    backgroundActive: `${lightColors.primary}D9`, // darkten 10%
    backgroundHover: `${lightColors.primary}B3`, // lighten 10%
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    boxShadowActive: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    color: "#FFFFFF",
  },
  [SECONDARY]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: `2px solid ${lightColors.primary}`,
    borderColorHover: `${lightColors.primary}D9`,
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    boxShadowActive: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    color: lightColors.primary,
  },
  [TERTIARY]: {
    background: lightColors.tertiary,
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [DANGER]: {
    background: lightColors.failure,
    backgroundActive: `${lightColors.failure}D9`, // darkten 10%
    backgroundHover: `${lightColors.failure}B3`, // lighten 10%
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    boxShadowActive: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    color: "#FFFFFF",
  },
  [SUBTLE]: {
    background: lightColors.textSubtle,
    backgroundActive: `${lightColors.textSubtle}D9`, // 70% opacity
    backgroundHover: `${lightColors.textSubtle}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    boxShadowActive: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    color: "#FFFFFF",
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    boxShadowActive: "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
    color: "#FFFFFF",
  },
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.tertiary,
    color: darkColors.primary,
  },
  [TEXT]: {
    ...light.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUBTLE]: {
    ...light.subtle,
  },
  [SUCCESS]: {
    ...light.success,
  },
};
