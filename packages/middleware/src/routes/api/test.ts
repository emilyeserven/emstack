import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { FastifyInstance } from "fastify";
import { DynamicTest } from "@emstack/types/src/index.ts";

const testSchema = {
  schema: {
    description: "It's like looking into a mirror...",
    params: {
      type: "object",
      properties: {
        test: {
          type: "string",
        },
      },
      required: ["test"],
    },
  },
} as const;

export default async function (server: FastifyInstance) {
  const fastify = server.withTypeProvider<JsonSchemaToTsProvider>();

  fastify.get(
    "/:test",
    testSchema,
    async function (request, reply) {
      const {
        test,
      } = request.params;
      const returnValue: DynamicTest = test;
      return returnValue;
    },
  );
}
