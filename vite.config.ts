import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace this with your actual Dev Tunnel domain each time it changes:
const tunnelHost = "8l7p9kx6-8080.inc1.devtunnels.ms";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",       // allow IPv6 + external connections
    port: 8080,
    hmr: {
      protocol: "wss",      // match tunnel's secure websocket protocol
      host: tunnelHost,     // use your current tunnel hostname
      port: 443,            // Dev Tunnels uses HTTPS/WSS on 443
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
