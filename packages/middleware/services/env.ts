const envSchema = {
  type: "object",
  properties: {
    VALUE: {
      type: "string",
    },
  },
} as const;

export const envOptions = {
  schema: envSchema,
  dotenv: true,
};
