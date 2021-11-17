import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [vue(), dts()],
  server: {
    https: false,
    port: 3000
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "made-vue-blades",
      fileName: (format) => `made-vue-blades.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    minify: false,
  },
});
