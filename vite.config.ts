import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import packageJson from "./package.json" with { type: "json" };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: packageJson.name,
        namespace: `https://github.com/${packageJson.author}`,
        version: packageJson.version,
        author: packageJson.author,
        description: packageJson.description,
        match: ["https://sv.pokesol.com/*"],
        license: packageJson.license,
      },
    }),
  ],
});
