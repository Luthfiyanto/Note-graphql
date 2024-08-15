import express, { json } from "express";
import cors from "cors";
import { HOST_PORT } from "./libs/env.js";

import gql from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@apollo/server/express4";
import resolvers from "./api/resolvers/resolvers.js";
import { readFileSync } from "fs";

async function main() {
  const app = express();

  app.use(cors(), json());

  const typeDefs = gql(readFileSync("./src/api/schema/schema.graphql", { encoding: "utf-8" }));

  const server = new ApolloServer({
    schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  });

  await server.start();
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  app.listen(HOST_PORT, () => {
    console.info(`Server started on port ${HOST_PORT}`);
  });
}

main();
