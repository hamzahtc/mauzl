import { defineConfig } from "orval";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  mauzlApi: {
    output: {
      mode: "split",
      target: "./generated/hooks.ts",
      schemas: "./models",
      client: "react-query",
      mock: true,
      baseUrl: "/api",
      override: {
        mutator: {
          path: "./utils/axios.ts",
          name: "customInstance",
        },
      },
    },
    input: {
      target: "http://localhost:4000/api/openapi",
    },
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
  },
});
