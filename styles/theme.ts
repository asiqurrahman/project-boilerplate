import { createGlobalStyle } from "styled-components";

const palette = {
  grey: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    950: "#020617",
  },
  blue: {
    50: "#EFF8FF",
    100: "#DEF1FF",
    200: "#B6E4FF",
    300: "#75D1FF",
    400: "#2CBAFF",
    500: "#14ADFF",
    600: "#0080D4",
    700: "#0065AB",
    800: "#00568D",
    900: "#064874",
    950: "#042D4D",
  },
  yellow: {
    50: "#FEFCE8",
    100: "#FEF9C3",
    200: "#FEF08A",
    300: "#FDE047",
    400: "#FACC15",
    500: "#EAB308",
    600: "#CA8A04",
    700: "#A16207",
    800: "#854D0E",
    900: "#713F12",
    950: "#422006",
  },
  green: {
    50: "#F7FEE7",
    100: "#ECFCCB",
    200: "#D9F99D",
    300: "#BEF264",
    400: "#A3E635",
    500: "#84CC16",
    600: "#65A30D",
    700: "#4D7C0F",
    800: "#3F6212",
    900: "#365314",
    950: "#1A2E05",
  },
  red: {
    50: "#FFF1F2",
    100: "#FFE4E6",
    200: "#FECDD3",
    300: "#FDA4AF",
    400: "#FB7185",
    500: "#F43F5E",
    600: "#E11D48",
    700: "#BE123C",
    800: "#9F1239",
    900: "#881337",
    950: "#4C0519",
  },
};

const paletteWithoutHash = {
  grey: {
    50: "F8FAFC",
    100: "F1F5F9",
    200: "E2E8F0",
    300: "CBD5E1",
    400: "94A3B8",
    500: "64748B",
    600: "475569",
    700: "334155",
    800: "1E293B",
    900: "0F172A",
    950: "020617",
  },
  blue: {
    50: "EFF8FF",
    100: "DEF1FF",
    200: "B6E4FF",
    300: "75D1FF",
    400: "2CBAFF",
    500: "14ADFF",
    600: "0080D4",
    700: "0065AB",
    800: "00568D",
    900: "064874",
    950: "042D4D",
  },
  yellow: {
    50: "FEFCE8",
    100: "FEF9C3",
    200: "FEF08A",
    300: "FDE047",
    400: "FACC15",
    500: "EAB308",
    600: "CA8A04",
    700: "A16207",
    800: "854D0E",
    900: "713F12",
    950: "422006",
  },
  green: {
    50: "F7FEE7",
    100: "ECFCCB",
    200: "D9F99D",
    300: "BEF264",
    400: "A3E635",
    500: "84CC16",
    600: "65A30D",
    700: "4D7C0F",
    800: "3F6212",
    900: "365314",
    950: "1A2E05",
  },
  red: {
    50: "FFF1F2",
    100: "FFE4E6",
    200: "FECDD3",
    300: "FDA4AF",
    400: "FB7185",
    500: "F43F5E",
    600: "E11D48",
    700: "BE123C",
    800: "9F1239",
    900: "881337",
    950: "4C0519",
  },
};

const lightSemantic = {
  text: {
    primary: "#020617",
    secondary: "#475569",
    tertiary: "#64748B",
    accent: {
      blue: "#0065AB",
      red: "#9F1239",
      green: "#3F6212",
      yellow: "#854D0E",
    },
  },
  border: {
    grey: {
      light: "#E2E8F0",
      medium: "#CBD5E1",
      dark: "#94A3B8",
    },
  },
  background: {
    grey: {
      primary: "#FFFFFF",
      secondary: "#F8FAFC",
      tertiary: "#F1F5F9",
    },

    blue: {
      primary: "#EFF8FF",
      secondary: "#DEF1FF",
      tertiary: "#B6E4FF",
    },

    yellow: {
      primary: "#FEFCE8",
      secondary: "#FEF9C3",
      tertiary: "#FEF08A",
    },

    red: {
      primary: "#FFF1F2",
      secondary: "#FFE4E6",
      tertiary: "#FECDD3",
    },

    green: {
      primary: "#F7FEE7",
      secondary: "#ECFCCB",
      tertiary: "#D9F99D",
    },
  },
};

const darkSemantic = {
  text: {
    primary: "#F8FAFC",
    secondary: "#CBD5E1",
    tertiary: "#94A3B8",
    accent: {
      blue: "#2CBAFF",
      red: "#FECDD3",
      green: "#D9F99D",
      yellow: "#FEF08A",
    },
  },
  border: {
    grey: {
      light: "#334155",
      medium: "#475569",
      dark: "#64748B",
    },
  },
  background: {
    grey: {
      primary: "#020617",
      secondary: "#0F172A",
      tertiary: "#1E293B",
    },
    blue: {
      primary: "#042D4D",
      secondary: "#064874",
      tertiary: "#00568D",
    },
    yellow: {
      primary: "#422006",
      secondary: "#713F12",
      tertiary: "#854D0E",
    },
    red: {
      primary: "#4C0519",
      secondary: "#881337",
      tertiary: "#9F1239",
    },
    green: {
      primary: "#1A2E05",
      secondary: "#365314",
      tertiary: "#3F6212",
    },
  },
};

export const LightTheme = {
  mode: "light",

  colors: {
    body: "#FFFFFF",
    semantic: lightSemantic,
    background: lightSemantic.background,
    border: lightSemantic.border,

    text: lightSemantic.text,
  },
  breakpoints: {
    xs: "@media only screen and (min-width: 320px)",
    sm: "@media only screen and (min-width: 768px)",
    md: "@media only screen and (min-width: 1024px)",
    lg: "@media only screen and (min-width: 1200px)",
    xl: "@media only screen and (min-width: 1400px)",
  },
};

export const DarkTheme = {
  mode: "dark",
  colors: {
    body: "#020617",
    semantic: darkSemantic,
    background: darkSemantic.background,
    border: darkSemantic.border,
    text: darkSemantic.text,
  },
  breakpoints: {
    xs: "@media only screen and (min-width: 320px)",
    sm: "@media only screen and (min-width: 768px)",
    md: "@media only screen and (min-width: 1024px)",
    lg: "@media only screen and (min-width: 1200px)",
    lm: "@media only screen and (min-width: 1300px)",
    xl: "@media only screen and (min-width: 1400px)",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props: any) => {
      return props.theme.colors.body;
    }};
    transition: all 0.25s ease;
  }
`;
