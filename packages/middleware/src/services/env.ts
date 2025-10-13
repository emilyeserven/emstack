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

export const makeEnvOptions = (dirname: string) => {
  return {
    schema: envSchema,
    dotenv: {
      path: `${dirname}/.env`,
      debug: false,
    },
  };
};
