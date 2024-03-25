import { defineConfig } from "cypress";

export default defineConfig({
  env: {},
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
