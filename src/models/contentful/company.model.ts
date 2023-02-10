import { EntryCollection } from "contentful";

import { currentCompanyEstimative, injectAppIconsAtContentful } from "utils";

import type { CompanyProps } from "types";

const CURRENT_JOB_START = "2022-06-22";

export function companyModel(companyEntry: EntryCollection<CompanyProps>) {
  const iconsInjectedCompany = injectAppIconsAtContentful(companyEntry);
  const { items } = iconsInjectedCompany;

  if (!items.length) return companyEntry;

  const newItems = items.reduce((newList, item) => {
    const { fields } = item as any;
    const { image, isCurrentJob, period, webSite } = fields;

    const newPeriod = isCurrentJob
      ? currentCompanyEstimative(period, CURRENT_JOB_START)
      : period;

    const newFields = {
      ...fields,
      image: `https:${image?.fields?.file?.url}`,
      period: newPeriod,
      link: webSite,
    };

    return [...newList, { ...item, fields: newFields }];
  }, []);

  return { ...companyEntry, items: newItems };
}
