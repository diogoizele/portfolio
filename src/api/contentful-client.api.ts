import { createClient } from "contentful";

import { logs } from "utils";
import { ContentTypes } from "config/constants";
import { SocialMediaModel, companyModel, educationModel } from "models";

import type { CompanyEntry, EducationEntry, SocialMediaEntry } from "types";

const { CONTENTFUL_ACCESS_TOKEN } = process.env;
const { CONTENTFUL_SPACE } = process.env;

const client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export const getEducationContent = async () => {
  try {
    const entries = await client.getEntries<EducationEntry>({
      content_type: ContentTypes.education,
    });

    return educationModel(entries);
  } catch (error) {
    logs("Contentful client: getEducationContent - ", error);
    throw error;
  }
};

export const getExperienceContent = async () => {
  try {
    const entries = await client.getEntries<CompanyEntry>({
      content_type: ContentTypes.experience,
    });

    return companyModel(entries);
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
