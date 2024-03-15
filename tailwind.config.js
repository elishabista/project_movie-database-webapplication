/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B72EB",
        onPrimary: "#FFFFFF",
        primaryContainer: "#0B72EB",
        background: "#000000",
        onBackground: "#525252",
        surface: "#1F1F1F",
        onSurface: "#F5F5F5",
        surfaceVariant: "#292929",
        onSurfaceVariant: "#A3A3A3",
        wrapperCard: "#1F1F1F64",
      },
    },
  },
  plugins: [],
};
