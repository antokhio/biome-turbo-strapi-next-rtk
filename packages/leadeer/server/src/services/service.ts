import type { Core } from "@strapi/strapi";

// biome-ignore lint/correctness/noUnusedFunctionParameters: <explanation>
const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },
});

export default service;
