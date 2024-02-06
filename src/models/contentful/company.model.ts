import { EntryCollection } from "contentful";

import { currentCompanyEstimative } from "utils";

import type { CompanyEntry, CompanyProps } from "types";

export function companyModel({
  items,
}: EntryCollection<CompanyEntry>): CompanyProps[] {
  const mappedItems = items
    .map(({ fields }) => fields)
    .map(
      ({
        image,
        isCurrentJob,
        period,
        webSite,
        currentStartDate,
        ...rest
      }) => ({
        ...rest,
        image: `https:${image?.fields?.file?.url}`,
        period: isCurrentJob
          ? currentCompanyEstimative(period, currentStartDate)
          : period,
        link: webSite,
        isCurrentJob,
        currentStartDate,
      })
    );

  return mappedItems;
}
