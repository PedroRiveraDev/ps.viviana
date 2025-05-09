/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL: string;
  readonly SITE_NAME: string;
  readonly SITE_DESCRIPTION: string;
  readonly CONTACT_EMAIL: string;
  readonly CONTACT_PHONE: string;
  readonly INSTAGRAM_URL: string;
  readonly LINKEDIN_URL: string;
  readonly FORMSPREE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}