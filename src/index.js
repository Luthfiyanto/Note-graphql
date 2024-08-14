import express, { json } from "express";
import { HOST_PORT } from "./libs/env.js";

function main() {
  const app = express();

  app.use(json());

  app.listen(HOST_PORT, () => {
    console.info(`Server started on port ${HOST_PORT}`);
  });
}

main();
