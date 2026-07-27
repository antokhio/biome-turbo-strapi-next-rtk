/**
 * Application methods
 */
import bootstrap from "./bootstrap";
/**
 * Plugin server methods
 */
import config from "./config";
import contentTypes from "./content-types";
import controllers from "./controllers";
import destroy from "./destroy";
import middlewares from "./middlewares";
import policies from "./policies";
import register from "./register";
import routes from "./routes";
import services from "./services";

type Plugin = {
  bootstrap: typeof bootstrap;
  config: typeof config;
  contentTypes: typeof contentTypes;
  controllers: typeof controllers;
  destroy: typeof destroy;
  middlewares: typeof middlewares;
  policies: typeof policies;
  register: typeof register;
  routes: typeof routes;
  services: typeof services;
};

const plugin: Plugin = {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  routes,
  services,
  contentTypes,
  policies,
  middlewares,
};

export default plugin;
