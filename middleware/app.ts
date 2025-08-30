import fastifyCors from "@fastify/cors";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import Fastify from "fastify";

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

fastify.register(fastifyEnc, envOptions)
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
