const swaggerOptions = {
  swagger: {
    info: {
      title: "Docs title",
      description: "Docs description",
      version: "0.0.0",
    },
    host: "localhost:3001",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

export default swaggerOptions;
