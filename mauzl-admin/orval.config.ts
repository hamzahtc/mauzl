import { defineConfig } from "orval";

export default defineConfig({
  mauzlApi: {
    output: {
      mode: "split",
      target: "./generated/hooks.ts",
      schemas: "./models",
      client: "react-query",
      mock: true,
      baseUrl: "http://localhost:4000/api",
    },
    input: {
      target: "http://localhost:4000/api/openapi",
    },
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
  },
});
