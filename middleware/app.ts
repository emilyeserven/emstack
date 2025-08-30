import fastifyCors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import Fastify from "fastify";

import { envOptions } from "./services/env";
import swaggerOptions from "./services/swaggerOptions";
import swaggerUiOptions from "./services/swaggerUiOptions";

declare module "fastify" {
  interface FastifyInstance {
    config: {
      VALUE: string;
    };
  }
}

const fastify = Fastify({
  logger: false,
}).withTypeProvider<JsonSchemaToTsProvider>();

await fastify.register(fastifyCors);

fastify.register(fastifyEnv, envOptions)
  .ready((err) => {
    if (err) console.error(err);
  });

fastify.register(fastifySwagger, swaggerOptions);
fastify.register(fastifySwaggerUi, swaggerUiOptions);

fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({
      port: 3001,
      host: "0.0.0.0",
    });
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
