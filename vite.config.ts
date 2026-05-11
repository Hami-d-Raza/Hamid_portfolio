import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    tanstackStart({
      server: {
        preset: "vercel"
      }
    }),
    react()
  ]
});
