import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  publicDir: "assets",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/home.html"),
        aboutRes: resolve(__dirname, "src/aboutRes.html"),
        aboutCheff: resolve(__dirname, "src/aboutCheff.html"),
      },
    },
  },
});
