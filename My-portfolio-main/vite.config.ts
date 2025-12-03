import path from "node:path"

import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    base: "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      outDir: "dist",
    },
    server: {
      // Use PORT from environment variables if available, otherwise let Vite choose
      port: env.PORT ? parseInt(env.PORT) : undefined,
      strictPort: false, // Allow fallback to another port if the specified one is busy
    },
  }
})