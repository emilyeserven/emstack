import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { FastifyInstance } from "fastify";
import { Test } from "@emstack/types/src/index.js";

export default async function (server: FastifyInstance) {
  const fastify = server.withTypeProvider<JsonSchemaToTsProvider>();

  fastify.get(
    "/",
    async (request, reply) => {
      const testObj: Test = {
        item: "Hello World, from API route!",
        fromEnv: fastify.config.VALUE,
      };
      return testObj;
    },
  );
}
