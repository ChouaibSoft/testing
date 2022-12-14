import { PaletteMode } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { teal, red } from "@mui/material/colors";
// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  lighter: "#AAE279",
  light: "#64C786",
  main: "#1EA88E",
  dark: "#00888A",
  darker: "#006778",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#AAE279",
  light: "#1EA88E",
  main: "#AAE279",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          common: { black: "#000", white: "#fff" },
          primary: { ...PRIMARY },
          text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500],
          },
          // background: { paper: "#222", default: GREY[100], neutral: GREY[200] },
          // action: {
          //   active: GREY[600],
          //   hover: GREY[500_8],
          //   selected: GREY[500_16],
          //   disabled: GREY[500_80],
          //   disabledBackground: GREY[500_24],
          //   focus: GREY[500_24],
          //   hoverOpacity: 0.08,
          //   disabledOpacity: 0.48,
          // },
        }
      : {
          common: { black: "#000", white: "#fff" },
          primary: { ...PRIMARY },
          // secondary: { ...SECONDARY },
          // info: { ...INFO },
          // success: { ...SUCCESS },
          // warning: { ...WARNING },
          // error: { ...ERROR },
          // grey: GREY,
          // gradients: GRADIENTS,
          // chart: CHART_COLORS,
          // divider: GREY[500_24],

          background: {
            // paper: "#03100e",
            default: "#03100e",
            neutral: GREY[200],
          },
          // action: {
          //   active: GREY[600],
          //   hover: GREY[500_8],
          //   selected: GREY[500_16],
          //   disabled: GREY[500_80],
          //   disabledBackground: GREY[500_24],
          //   focus: GREY[500_24],
          //   hoverOpacity: 0.08,
          //   disabledOpacity: 0.48,
          // },
        }),
  },
});

export const palette = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};
