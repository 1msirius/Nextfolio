/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: (theme) => ({
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
        neutral: {
          css: {
            "--tw-prose-body": theme("colors.black", "#000"),
            "--tw-prose-links": theme("colors.black", "#000"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
