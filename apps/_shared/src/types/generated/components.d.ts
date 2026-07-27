import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDefaultSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_default_seos';
  info: {
    displayName: 'Default Seo';
    icon: 'search';
  };
  attributes: {
    defaultDescription: Schema.Attribute.Text;
    defaultEmptyTitle: Schema.Attribute.String;
    defaultKeywords: Schema.Attribute.Text;
    defaultMetaImage: Schema.Attribute.Media<'images'>;
    defaultMetaRobots: Schema.Attribute.String;
    defaultTitlePostfix: Schema.Attribute.String;
  };
}

export interface SharedShotSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_shot_seos';
  info: {
    displayName: 'Shot Seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.default-seo': SharedDefaultSeo;
      'shared.shot-seo': SharedShotSeo;
    }
  }
}
