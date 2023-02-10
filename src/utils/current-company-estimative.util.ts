import dayjs from "dayjs";

export function currentCompanyEstimative(period: string, startDate: string) {
  const companyStartDate = dayjs(startDate);
  const companyEndDate = dayjs();
  const duration = companyEndDate.diff(companyStartDate, "month");
  const years = Math.floor(duration / 12);
  const months = duration % 12;

  const formattedDuration = `${
    years > 0 ? `${years} year${years === 1 ? "" : "s"}` : ""
  } ${years > 0 ? " and " : ""} ${months} month${months === 1 ? "" : "s"}`;

  return `${period} ${formattedDuration}`;
}
