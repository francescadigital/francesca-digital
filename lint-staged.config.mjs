const config = {
  "*.{js,jsx,ts,tsx,mjs,cjs}": ["eslint --fix", "prettier --write"],

  "*.{json,md,mdx,css,yaml,yml}": ["prettier --write"],
};

export default config;
