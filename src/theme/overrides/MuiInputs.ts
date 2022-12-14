import { palette } from "../palette";
export const MuiInputs = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.Mui-disabled": {
          // "& svg": { color: palette.text.disabled },
        },
      },
      input: {
        "&::placeholder": {
          opacity: 1,
          // color: palette.text.disabled,
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      underline: {
        "&:before": {
          // borderBottomColor: palette.grey[500_56],
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        // backgroundColor: palette.grey[500_12],
        "&:hover": {
          // backgroundColor: palette.grey[500_16],
        },
        "&.Mui-focused": {
          // backgroundColor: palette.action.focus,
        },
        "&.Mui-disabled": {
          // backgroundColor: palette.action.disabledBackground,
        },
      },
      underline: {
        "&:before": {
          // borderBottomColor: palette.grey[500_56],
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-notchedOutline": {
          // borderColor: palette.grey[500_32],
        },
        "&.Mui-disabled": {
          "& .MuiOutlinedInput-notchedOutline": {
            // borderColor: palette.action.disabledBackground,
          },
        },
      },
    },
  },
};
