import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "www.localhost:3000",
    },
  },
  plugins: [react()],
});
