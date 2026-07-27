import type { Data } from "@strapi/strapi";

export type * from "./generated/components";
export type * from "./generated/contentTypes";

export type LayoutDTO = Data.ContentType<"api::layout.layout">;

export type SharedDefaultSeoDTO = Data.Component<"shared.default-seo">;
export type SharedShotSeoDTO = Data.Component<"shared.shot-seo">;
