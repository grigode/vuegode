import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "core",
      fileName: (format) => `core.${format}.js`,
    },
  },
});
