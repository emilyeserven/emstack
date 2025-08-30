import { defineConfig } from "vite";
import tanstackRouter from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { react } from "@vitejs/plugin-react";

export default defineConfig({
  preview: {
    port: 4173,
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
});
