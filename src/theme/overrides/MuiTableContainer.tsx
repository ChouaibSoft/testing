import { Paper } from "@mui/material";
import { palette } from "../palette";

export const MuiTableContainer = {
  defaultProps: {
    component: Paper,
  },
  styleOverrides: {
    root: {
      boxShadow: "none",
      "&::-webkit-scrollbar": {
        width: 4,
      },

      "&::-webkit-scrollbar-track": {
        backgroundColor: palette.grey[100],
        borderRadius: 8,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: palette.grey[500],
        borderRadius: 8,
      },
    },
  },
};
