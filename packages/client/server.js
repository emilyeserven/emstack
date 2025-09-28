import Fastify from "fastify";
import { fileURLToPath } from "node:url";
import path from "path";

const fastify = Fastify({
  logger: false,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fastify.register(import("@fastify/static"), {
  root: path.join(__dirname, "/dist"),
});

fastify.get("/", async (request, reply) => {
  return reply.sendFile("index.html", path.join(__dirname, "dist"));
});

const start = async () => {
  try {
    await fastify.listen({
      port: 3000,
      host: "0.0.0.0",
    });
    console.log("listening on http://localhost:3000");
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
