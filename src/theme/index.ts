import { createTheme, Direction, responsiveFontSizes } from "@mui/material";
import { getDesignTokens } from "./palette";
import { overrides } from "./overrides/index";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";
import { shape } from "./shape";
import { PaletteMode } from "@mui/material";
import useConfig from "hooks/useConfig";

export const theme = (dir: Direction = "ltr", mode: PaletteMode = "light") => {
  const typo = typography(dir);
  return responsiveFontSizes(
    createTheme({
      direction: dir,
      typography: typo,
      ...getDesignTokens(mode),
      breakpoints,
      shape,
      //  shadows,
      // customShadows,
      components: { ...overrides },
    })
  );
};
