import { createClient } from "contentful";

import { ContentTypes } from "config/constants";

import type { CompanyProps } from "types";

const { CONTENTFUL_ACCESS_TOKEN } = process.env;
const { CONTENTFUL_SPACE } = process.env;

class ContentfulService {
  accessToken: string;
  space: string;

  constructor() {
    this.accessToken = CONTENTFUL_ACCESS_TOKEN;
    this.space = CONTENTFUL_SPACE;
  }

  async getEducationContent() {
    const client = createClient({
      space: this.space,
      accessToken: this.accessToken,
    });

    const entries = await client.getEntries({
      content_type: ContentTypes.education,
    });

    return entries;
  }

  async getExperienceContent() {
    const client = createClient({
      space: this.space,
      accessToken: this.accessToken,
    });

    const entries = await client.getEntries<CompanyProps>({
      content_type: ContentTypes.experience,
    });

    return entries;
  }
}

export default new ContentfulService();
