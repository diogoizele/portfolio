import { EntryCollection } from "contentful";

import { currentCompanyEstimative } from "utils";

import type { CompanyEntry, CompanyProps } from "types";

const CURRENT_JOB_START = "2022-06-22";

export function companyModel({
  items,
}: EntryCollection<CompanyEntry>): CompanyProps[] {
  const mappedItems = items
    .map(({ fields }) => fields)
    .map(({ image, isCurrentJob, period, webSite, ...rest }) => ({
      ...rest,
      image: `https:${image?.fields?.file?.url}`,
      period: isCurrentJob
        ? currentCompanyEstimative(period, CURRENT_JOB_START)
        : period,
      link: webSite,
      isCurrentJob,
    }));

  return mappedItems;
}
