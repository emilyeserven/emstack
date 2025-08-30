import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { FastifyInstance } from "fastify";

import apiRoutes from "./api/routes";
import root from "./root";

export default async function (server: FastifyInstance) {
  const fastify = server.withTypeProvider<JsonSchemaToTsProvider>();

  fastify.register(root);
  fastify.register(apiRoutes, {
    prefix: "/api",
  });
}
