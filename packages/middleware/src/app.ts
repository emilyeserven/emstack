import fastifyCors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import Fastify from "fastify";

import routes from "./routes/routes.ts";
import { makeEnvOptions } from "./services/env.ts";
import swaggerOptions from "./services/swaggerOptions.ts";
import swaggerUiOptions from "./services/swaggerUiOptions.ts";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

fastify.register(fastifyEnv, makeEnvOptions(__dirname))
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
    console.log("listening on http://localhost:3001");
  }
  catch (err) {
    fastify.log.error(err);
    console.error("Make sure there are not multiple instances of a server running on port 3001.");
    process.exit(1);
  }
};
start();
