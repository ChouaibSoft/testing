import { customShadows } from "./../shadow";
import { palette } from "../palette";

export const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: "150px",
      "&:hover": {
        boxShadow: "none",
      },
    },
    sizeLarge: {
      height: 48,
    },
    containedInherit: {
      color: palette.grey[800],
      boxShadow: customShadows.z8,
      "&:hover": {
        backgroundColor: palette.grey[400],
      },
    },
    containedPrimary: {
      boxShadow: customShadows.primary,
    },
    containedSecondary: {
      boxShadow: customShadows.secondary,
    },
    outlinedInherit: {
      border: `1px solid ${palette.grey[500_32]}`,
      "&:hover": {
        backgroundColor: palette.action.hover,
      },
    },
    textInherit: {
      "&:hover": {
        backgroundColor: palette.action.hover,
      },
    },
  },
};
