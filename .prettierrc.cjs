
/** @type {import("prettier").Config} */
const config = {
  trailingComma: "all",
  semi: false,
  tailwindFunctions: ["clsx", "cx", "cva", "cn"],
  plugins: ["prettier-plugin-tailwindcss"],
}
module.exports = config;