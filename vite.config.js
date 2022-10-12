import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  publicDir: "assets",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        aboutRes: resolve(__dirname, "src/aboutRes.html"),
        aboutCheff: resolve(__dirname, "src/aboutCheff.html"),
        menu: resolve(__dirname, "src/menu.html"),
        contact: resolve(__dirname, "src/contact.html"),
        blog: resolve(__dirname, "src/blog.html"),
        order: resolve(__dirname, "src/order.html"),
        cart: resolve(__dirname, "src/cart.html"),
        decs: resolve(__dirname, "src/decs.html"),
      },
    },
  },
});
