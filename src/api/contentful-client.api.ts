import { createClient } from "contentful";

import { logs } from "utils";
import { ContentTypes } from "config/constants";
import { SocialMediaModel } from "models";

import type { CompanyProps, EducationProps, SocialMediaEntry } from "types";

const { CONTENTFUL_ACCESS_TOKEN } = process.env;
const { CONTENTFUL_SPACE } = process.env;

const client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export const getEducationContent = async () => {
  logs("Contentful client: getEducationContent", 1, undefined);
  try {
    const entries = await client.getEntries<EducationProps>({
      content_type: ContentTypes.education,
    });

    return entries;
  } catch (error) {
    logs("Contentful client: getEducationContent - ", error);
    throw error;
  }
};

export const getExperienceContent = async () => {
  try {
    const entries = await client.getEntries<CompanyProps>({
      content_type: ContentTypes.experience,
    });

    return entries;
  } catch (error) {
    logs("Contentful client: getExperienceContent - ", error);
    throw error;
  }
};

export const getSocialMediaContent = async () => {
  try {
    const entries = await client.getEntries<SocialMediaEntry>({
      content_type: ContentTypes.socialMedia,
    });

    return SocialMediaModel(entries);
  } catch (error) {
    logs("Contentful client: getSocialMediaContent - ", error);
    throw error;
  }
};
