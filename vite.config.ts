import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/proxy": {
        target: "https://drive.google.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace("/proxy/", ""),
      },
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"], // Keep if needed
  },
});
