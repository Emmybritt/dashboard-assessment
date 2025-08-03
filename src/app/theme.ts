import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        red: { value: "#E5372B" },
        orange: { value: "#FF9500" },
        lightorange: { value: "#fef1f0" },
        darkred: { value: "#C6190D" },
        gray: { value: "#525D73" },
        green: { value: "#02983E" },
        lightgreen: { value: "#e8faf0" },
        lightblue: { value: "#d7eaff" },
        blue: { value: "#1774de" },
        dark: { value: "#0a0a0a" },
        white: { value: "#ffffff" },
        black: { value: "#334155" },
        cardbgdark: { value: "#171717" },
        lightgray: { value: "#E0E2E7" },
      },
    },
    semanticTokens: {
      colors: {
        danger: {
          value: { base: "{colors.red}", _dark: "{colors.darkred}" },
        },
        success: {
          value: { base: "{colors.green}", _dark: "{colors.green}" },
        },
        info: { value: { base: "{color.blue}", _dark: "{colors.blue}" } },
        bg: {
          value: { base: "#fafafa", _dark: "{colors.dark}" },
        },
        cardbg: {
          value: { base: "{colors.white}", _dark: "{colors.cardbgdark}" },
        },
        text: { value: { base: "{colors.gray}", _dark: "{colors.white}" } },
        black: { value: { base: "{colors.black}", _dark: "{colors.white}" } },
        orange: {
          value: { base: "{colors.orange}", _dark: "{colors.orange}" },
        },
        active: {
          value: { base: "{colors.lightgreen}", _dark: "{colors.lightgreen}" },
        },
        border: {
          value: { base: "colors.lightgray", _dark: "#333333" },
        },
        gridCard: {
          value: { base: "#fafafa", _dark: "#1d1d1d" },
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
