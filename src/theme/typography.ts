export const typography = (dir = "rtl") => {
  return dir === "rtl"
    ? {
        // arabic (right to left)
        fontFamily: ["tajawal", "sans-serif"].join(","),
        fontSize: 16,
      }
    : {
        // english (left to right)
        fontFamily: ["tajawal", "sans-serif"].join(","),
        fontSize: 16,
      };
};
