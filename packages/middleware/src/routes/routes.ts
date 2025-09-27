import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { FastifyInstance } from "fastify";

import apiRoutes from "./api/routes.js";
import root from "./root.js";

export default async function (server: FastifyInstance) {
  const fastify = server.withTypeProvider<JsonSchemaToTsProvider>();

  fastify.register(root);
  fastify.register(apiRoutes, {
    prefix: "/api",
  });
}
