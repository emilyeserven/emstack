import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { FastifyInstance } from "fastify";

import apiRoot from "./root.ts";
import apiTest from "./testRoute.ts";

export default async function (server: FastifyInstance) {
  const fastify = server.withTypeProvider<JsonSchemaToTsProvider>();

  fastify.register(apiRoot);
  fastify.register(apiTest);
}
